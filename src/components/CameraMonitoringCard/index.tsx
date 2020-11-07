/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from 'react'
import { postIdentificationService } from '../../services/api/IdentificationService'

import './styles.css'
import { CameraMonitoringCardProps } from './types'

export default ({ title, id, addressHost }: CameraMonitoringCardProps) => {
  const [hasSinal, setHasSinal] = useState(true)
  var interval: NodeJS.Timeout
  var intervalCheckSinal: NodeJS.Timeout

  useEffect(() => {
    interval = setInterval(() => {
      onCaptureImage()
      clearInterval(interval)
    }, 2000)
    intervalCheckSinal = setInterval(() => onCheckSinal(), 10000)

    return () => {
      clearInterval(interval)
      clearInterval(intervalCheckSinal)
    }
  }, [])

  const onCaptureImage = () => {
    if (!hasSinal) return

    fetch(`${addressHost}/shot.jpg`, { method: 'GET' })
      .then(async resp => {
        const blobData = await resp.blob()
        const reader = new FileReader()

        reader.onloadend = () => {
          const startBase64 = reader.result?.toString().indexOf('base64,') ?? 0

          if (startBase64 === 0) return

          const imageBase64 = reader.result?.toString().substring(startBase64 + 7)

          postIdentificationService({
            cameraId: id,
            image: imageBase64 as string,
            capturedAt: new Date().toISOString()
          })
        }

        reader.readAsDataURL(blobData)
      })
  }

  const onError = () => {
    setHasSinal(false)
  }

  const onCheckSinal = async () => {
    fetch(`${addressHost}/shot.jpg`, { method: 'GET' })
      .then(() => setHasSinal(true))
      .catch(() => setHasSinal(false))
  }

  return (
    <div className='cntCamMonitCard'>
      <header>
        <span className='titleCamMonitCard'>{title}</span>
      </header>
      <section>
        {hasSinal
          ? (
            <img
              className='imgCamMonit'
              src={`${addressHost}/video`}
              onError={onError}
              alt='Carregando'
            />
          )
          : (
            <>
              <span className='icon-exclamation-triangle' />
              <span className='noSinalCamera'>Sem sinal</span>
            </>
          )}
      </section>
    </div>
  )
}

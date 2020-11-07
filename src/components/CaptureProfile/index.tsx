import React, { useRef, useEffect } from 'react'

import './styles.css'
import { CaptureProfileProps } from './types'

export default ({
  image,
  onChangeImage
}: CaptureProfileProps) => {
  const videoProfileRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const onFailSoHard = (error: MediaStreamError) => {
    console.log('Erro ao pegar stream: ', error)
  }

  useEffect(() => {
    loadUserMedia()
  }, [])

  const loadUserMedia = () => {
    navigator.getUserMedia({ video: true }, localMediaStream => {
      console.log('Lendo media: ', localMediaStream)

      const video: any = document.querySelector('video')
      video.srcObject = localMediaStream
    }, onFailSoHard)

    return true
  }

  const onPressCapture = () => {
    if (image !== '') return loadUserMedia() && onChangeImage('')

    const ctx = canvasRef.current?.getContext('2d', { desynchronized: false })
    ctx?.drawImage(videoProfileRef.current as HTMLVideoElement, 0, 0, 300, 335)

    const canvasImage = canvasRef.current?.toDataURL('image/png') ?? ''
    const startBase64 = canvasImage.indexOf('base64,') ?? 0

    if (startBase64 === 0) return

    const imageBase64 = canvasImage.substring(startBase64 + 7)
    onChangeImage(imageBase64)
  }

  return (
    <div className='cntCaptureProfile'>
      {image !== ''
        ? (
          <img className='profilePerson' src={`data:image/png;base64,${image}`} alt='Profile' />
        )
        : (
          <>
            <video ref={videoProfileRef} className='videProfile' autoPlay />
            <canvas ref={canvasRef} style={{ display: 'none' }} width={300} height={400} />
          </>
        )}

      <button onClick={onPressCapture} className='btnCapture'>
        <span className={`icon-${image !== '' ? 'reload' : 'instagram'}`} />
      </button>
    </div>
  )
}

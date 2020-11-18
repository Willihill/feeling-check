import React from 'react'

import './styles.css'
import { ReportCardProps } from './types'

export default ({ name, emotion, image, camera, capturedAt }: ReportCardProps) => (
  <div className='cntReportCard'>
    <img className='captureRptCard' src={`data:image/png;base64,${image}`} alt='Profile' />
    <div className='dataRptCard'>
      <span className='emotionRptCard'>{emotion !== '' ? emotion : 'Neutro'}</span>
      <span className='namePerson'>{name}</span>
      <span className='cameraTitle'>Tirada de: {camera}</span>
      <span className='cameraTitle'>em: {capturedAt}</span>
    </div>
  </div>
)

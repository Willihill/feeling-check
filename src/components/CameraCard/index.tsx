import React from 'react'

import './styles.css'
import { CameraCardProps } from './types'

export default ({ title, id, addressHost }: CameraCardProps) => (
  <div className='cntCameraCard'>
    <span className='infoCameraCard'>{id}</span>
    <span className='infoCameraCard'>{addressHost}</span>
    <span className='infoCameraCard'>{title}</span>
  </div>
)

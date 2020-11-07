import React from 'react'

import './styles.css'
import { PersonCardProps } from './types'

export default ({ name, profile }: PersonCardProps) => (
  <div className='cntPerosnCard'>
    <img className='profilePersonCard' src={`data:image/png;base64,${profile}`} alt='Profile' />
    <span className='infoPersonCard'>{name}</span>
  </div>
)

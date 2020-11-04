import React from 'react'

import './styles.css'
import { ButtonRadiusProps } from './types'

export default ({
  label,
  loading,
  onPress
}: ButtonRadiusProps) => (
  <div className='cntBtnRd' onClick={onPress}>
    <span className=''>{label}</span>
  </div>
)

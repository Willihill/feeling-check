import React from 'react'

import './styles.css'
import { InputTextProps } from './types'

export default ({
  label,
  value,
  onChangeText
}: InputTextProps) => (
  <div className='cntInputTxt'>
    <span className=''>{label}</span>
    <input value={value} onChange={(e) => onChangeText(e.target.value)} />
  </div>
)

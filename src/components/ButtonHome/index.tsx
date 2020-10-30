import React from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.css'
import { ButtonHomeProps } from './types'

export default ({ pathRouter, text, id }: ButtonHomeProps) => {
  const navigate = useNavigate()

  const onClickButton = () => navigate(pathRouter)

  return (
    <div className='cntBH' onClick={onClickButton} id={id}>
      <span>{text}</span>
    </div>
  )
}

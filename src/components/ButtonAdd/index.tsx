import React from 'react'

import './styles.css'
import { ButtonAdd } from './types'

export default ({ onPress }: ButtonAdd) => {
  return (
    <div className='cntBtnAdd' onClick={onPress}>
      <span className='icon-plus-round' />
    </div>
  )
}

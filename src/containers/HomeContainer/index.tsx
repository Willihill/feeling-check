import React from 'react'
import { Outlet } from 'react-router-dom'

import ButtonHome from '../../components/ButtonHome'

import './styles.css'

export default () => {
  return (
    <div className='container'>
      <div className='logo'>
        <span>Feeling Check</span>
      </div>

      <div className='options'>
        <div className='lineOpt'>
          <ButtonHome pathRouter='person' text='Pessoas' id='optPerson' />
          <ButtonHome pathRouter='camera' text='Cameras' id='optCamera' />
        </div>
        <div className='lineOpt'>
          <ButtonHome pathRouter='monitoring' text='Monitoramento' id='optMonitoring' />
          <ButtonHome pathRouter='report' text='Relatorio' id='optReport' />
        </div>
      </div>

      <Outlet />
    </div>
  )
}

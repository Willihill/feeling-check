import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createCameraService } from '../../services/MonitorService'
import { ApplicationState } from '../../store/reducer'

import './styles.css'

export default () => {
  const { MonitorReducer } = useSelector((state: ApplicationState) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onPressSend = () => dispatch(createCameraService())
  const onPressClose = () => navigate('/camera')

  return (
    <div className='cntCameraList'>
      <span className='icon-close-round' onClick={onPressClose} />
      <div className='contentList'>
        <div className='titleList'>
          <span>Cadastro de camera</span>
        </div>

        <div className='flexOneCenter' />
      </div>
    </div>
  )
}

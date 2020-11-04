import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ButtonLoading from '../../components/ButtonLoading'
import InputText from '../../components/InputText'
import { addCameraService } from '../../services/MonitorService'
import { ApplicationState } from '../../store/reducer'
import { setHostAddressAction, setPortAddressAction, setTitleCameraAction } from '../../store/reducer/AddCameraReducer/actions'

import './styles.css'

export default () => {
  const { AddCameraReducer } = useSelector((state: ApplicationState) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChangeTitle = (value: string) => dispatch(setTitleCameraAction(value))
  const onChangeHost = (value: string) => dispatch(setHostAddressAction(value))
  const onChangePort = (value: string) => dispatch(setPortAddressAction(value))

  const onPressSend = () => dispatch(addCameraService())
  const onPressClose = () => navigate('/camera')

  return (
    <div className='cntCameraList'>
      <span className='icon-close-round' onClick={onPressClose} />
      <div className='contentList'>
        <div className='titleList'>
          <span>Cadastro de camera</span>
        </div>

        <div className='flexOneCenter'>
          <div className='formCamera'>
            <InputText
              label='Título'
              value={AddCameraReducer.title}
              onChangeText={onChangeTitle}
            />

            <div id='lineCamera'>
              <div id='hostAddress'>
                <InputText
                  label='Host'
                  value={AddCameraReducer.hostAddress}
                  onChangeText={onChangeHost}
                />
              </div>

              <InputText
                label='Porta'
                value={AddCameraReducer.portAddress}
                onChangeText={onChangePort}
              />
            </div>

            <ButtonLoading
              label='Salvar'
              onPress={onPressSend}
              loading={AddCameraReducer.loading}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

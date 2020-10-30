import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import ButtonAdd from '../../components/ButtonAdd'
import CameraCard from '../../components/CameraCard'
import { getCamerasService } from '../../services/MonitorService'
import { ApplicationState } from '../../store/reducer'

import './styles.css'

export default () => {
  const { MonitorReducer } = useSelector((state: ApplicationState) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCamerasService())
  }, [])

  const onPressAdd = () => navigate('add')
  const onPressClose = () => navigate('/')

  return (
    <div className='cntCameraList'>
      <span className='icon-close-round' onClick={onPressClose} />
      <div className='contentList'>
        <div className='titleList'>
          <span>lista de cameras</span>
        </div>

        <div className='flexOneCenter'>
          {MonitorReducer.loading
            ? (
              <span>Carregando cameras</span>
            )
            : (
              <>
                <div className='listContent'>
                  {MonitorReducer.listCamera.map(item => (
                    <CameraCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      addressHost={item.hostAddress}
                    />
                  ))}
                </div>
                <ButtonAdd
                  onPress={onPressAdd}
                />
              </>
            )}
        </div>
      </div>

      <Outlet />
    </div>
  )
}

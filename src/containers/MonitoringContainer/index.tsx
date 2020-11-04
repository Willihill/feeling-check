import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CameraMonitoringCard from '../../components/CameraMonitoringCard'
import { getCamerasService } from '../../services/MonitorService'
import { ApplicationState } from '../../store/reducer'
import './styles.css'

export default () => {
  const { MonitorReducer } = useSelector((store: ApplicationState) => store)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCamerasService())
  }, [])

  return (
    <div className='cntMonitoring'>
      <div className='cntMonitoringTitle'>
        <span>Monitoramento de cameras</span>
      </div>

      <div className='cntCameraMonit'>
        {MonitorReducer.listCamera.map(item => (
          <CameraMonitoringCard
            key={item.id}
            id={item.id}
            title={item.title}
            addressHost={item.hostAddress}
          />
        ))}
      </div>
    </div>
  )
}

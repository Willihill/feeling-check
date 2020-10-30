import { Dispatch } from 'redux'
import { ApplicationState } from '../store/reducer'
import { setListCameraAction, setLoadingMonitorAction } from '../store/reducer/MonitorReducer/actions'
import { CameraProps } from '../store/reducer/MonitorReducer/types'

export const getCamerasService = () => {
  return (dispatch: Dispatch, getState: () => ApplicationState) => {
    const { MonitorReducer } = getState()

    if (MonitorReducer.loading) return

    dispatch(setLoadingMonitorAction(true))

    setTimeout(() => {
      const cameras: CameraProps[] = [
        {
          id: 1,
          title: 'Camera 1',
          hostAddress: 'http://192.168.0.150:1589'
        },
        {
          id: 2,
          title: 'Camera 2',
          hostAddress: 'http://192.168.0.054:1589'
        },
        {
          id: 3,
          title: 'Camera 3',
          hostAddress: 'http://192.168.0.105:8080'
        }
      ]
      dispatch(setListCameraAction(cameras))
      dispatch(setLoadingMonitorAction(false))
    }, 5000)
  }
}

export const createCameraService = () => {
  return (dispatch: Dispatch, getState: () => ApplicationState) => {

  }
}

import { Dispatch } from 'redux'
import { ApplicationState } from '../store/reducer'
import { setLoadingAddCameraAction } from '../store/reducer/AddCameraReducer/actions'
import { setListCameraAction, setLoadingMonitorAction } from '../store/reducer/MonitorReducer/actions'
import { asyncPromise } from '../utils/helpers/promise'
import { getCameraService, postCameraService } from './api/CameraService'

export const getCamerasService = () => {
  return async (dispatch: Dispatch, getState: () => ApplicationState) => {
    const { MonitorReducer } = getState()

    if (MonitorReducer.loading) return

    dispatch(setLoadingMonitorAction(true))
    const { data } = await getCameraService()

    dispatch(setListCameraAction(data.cameras))
    dispatch(setLoadingMonitorAction(false))

    // setTimeout(() => {
    //   const cameras: CameraProps[] = [
    //     {
    //       id: 1,
    //       title: 'Camera 1',
    //       hostAddress: 'http://192.168.0.100:8080'
    //     },
    //     {
    //       id: 2,
    //       title: 'Camera 2',
    //       hostAddress: 'http://192.168.0.101:8080'
    //     },
    //     {
    //       id: 3,
    //       title: 'Camera 3',
    //       hostAddress: 'http://192.168.0.100:8080'
    //     }
    //   ]
    //   dispatch(setListCameraAction(cameras))
    //   dispatch(setLoadingMonitorAction(false))
    // }, 50)
  }
}

export const addCameraService = () => {
  return async (dispatch: Dispatch, getState: () => ApplicationState) => {
    const { AddCameraReducer } = getState()

    dispatch(setLoadingAddCameraAction(true))
    const [error] = await asyncPromise(postCameraService(AddCameraReducer))

    // REMOVER ESSA LINHA
    getCamerasService()(dispatch, getState)

    if (error) {
      console.log(error)
      alert('Erro ao cadastrar camera.')
    }

    getCamerasService()(dispatch, getState)
    dispatch(setLoadingAddCameraAction(false))
  }
}

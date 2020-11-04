import {
  SET_LOADING,
  SET_LIST_CAMERA,
  ADD_CAMERA_MONITOR,
  CameraProps
} from './types'

export const setLoadingMonitorAction = (payload: boolean) => ({ type: SET_LOADING, payload })
export const setListCameraAction = (payload: CameraProps[]) => ({ type: SET_LIST_CAMERA, payload })
export const addCameraMonitorAction = (payload: CameraProps) => ({ type: ADD_CAMERA_MONITOR, payload })

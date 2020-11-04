import {
  SET_HOST_ADDRESS,
  SET_LOADING,
  SET_PORT_ADDRESS,
  SET_TITLE
} from './types'

export const setLoadingAddCameraAction = (payload: boolean) => ({ type: SET_LOADING, payload })
export const setTitleCameraAction = (payload: string) => ({ type: SET_TITLE, payload })
export const setHostAddressAction = (payload: string) => ({ type: SET_HOST_ADDRESS, payload })
export const setPortAddressAction = (payload: string) => ({ type: SET_PORT_ADDRESS, payload })

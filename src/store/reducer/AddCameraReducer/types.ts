import { Action } from 'redux'

export const SET_LOADING = 'AddCameraReducer/SET_LOADING'
export const SET_HOST_ADDRESS = 'AddCameraReducer/SET_HOST_ADDRESS'
export const SET_PORT_ADDRESS = 'AddCameraReducer/SET_PORT_ADDRESS'
export const SET_TITLE = 'AddCameraReducer/SET_TITLE'

export interface AddCameraState {
  title: string
  hostAddress: string
  portAddress: string
  loading: boolean
}

export interface ActionType extends Action {
  type: string
  payload: any
}

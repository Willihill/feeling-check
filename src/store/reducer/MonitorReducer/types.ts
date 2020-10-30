import { Action } from 'redux'

export const SET_LOADING = 'MonitorReducer/SET_LOADING'
export const SET_LIST_CAMERA = 'MonitorReducer/SET_LIST_CAMERA'

export interface CameraProps {
  title: string
  hostAddress: string
}

export interface MonitorState {
  loading: boolean
  listCamera: CameraProps[]
}

export interface ActionType extends Action {
  type: string
  payload: any
}

import { Action } from 'redux'

export const SET_LOADING = 'AddPersonReducer/SET_LOADING'
export const SET_NAME = 'AddPersonReducer/SET_NAME'
export const SET_IMAGE = 'AddPersonReducer/SET_IMAGE'

export interface AddPersonState {
  name: string
  imageFace: string
  loading: boolean
}

export interface ActionType extends Action {
  type: string
  payload: any
}

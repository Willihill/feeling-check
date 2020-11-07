import { Action } from 'redux'

export const SET_LOADING = 'PersonReducer/SET_LOADING'
export const SET_LIST_PERSON = 'PersonReducer/SET_LIST_CAMERA'

export interface PersonProps {
  id?: number
  name: string
  imageFace: string
}

export interface PersonState {
  loading: boolean
  listPerson: PersonProps[]
}

export interface ActionType extends Action {
  type: string
  payload: any
}

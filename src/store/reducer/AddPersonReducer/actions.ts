import {
  SET_IMAGE,
  SET_LOADING,
  SET_NAME
} from './types'

export const setLoadingAddPersonAction = (payload: boolean) => ({ type: SET_LOADING, payload })
export const setNamePersonAction = (payload: string) => ({ type: SET_NAME, payload })
export const setImagePersonAction = (payload: string) => ({ type: SET_IMAGE, payload })

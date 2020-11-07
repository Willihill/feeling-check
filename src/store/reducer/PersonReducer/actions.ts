import {
  SET_LOADING,
  SET_LIST_PERSON,
  PersonProps
} from './types'

export const setLoadingPersonAction = (payload: boolean) => ({ type: SET_LOADING, payload })
export const setListPersonAction = (payload: PersonProps[]) => ({ type: SET_LIST_PERSON, payload })

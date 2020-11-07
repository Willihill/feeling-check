import {
  SET_LOADING,
  SET_LIST_PERSON,
  PersonState,
  ActionType
} from './types'

const initialState: PersonState = {
  loading: false,
  listPerson: []
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state: PersonState = initialState, { type, payload }: ActionType): PersonState => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload }
    case SET_LIST_PERSON:
      return { ...state, listPerson: payload }
    default:
      return state
  }
}

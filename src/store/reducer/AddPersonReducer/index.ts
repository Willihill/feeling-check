import {
  SET_IMAGE,
  SET_LOADING,
  SET_NAME,
  AddPersonState,
  ActionType
} from './types'

const initialState: AddPersonState = {
  loading: false,
  name: '',
  imageFace: ''
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state: AddPersonState = initialState, { type, payload }: ActionType): AddPersonState => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload }
    case SET_NAME:
      return { ...state, name: payload }
    case SET_IMAGE:
      return { ...state, imageFace: payload }
    default:
      return state
  }
}

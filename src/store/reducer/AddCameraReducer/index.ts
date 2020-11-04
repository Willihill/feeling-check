import {
  SET_HOST_ADDRESS,
  SET_LOADING,
  SET_PORT_ADDRESS,
  SET_TITLE,
  AddCameraState,
  ActionType
} from './types'

const initialState: AddCameraState = {
  loading: false,
  title: '',
  hostAddress: '',
  portAddress: ''
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state: AddCameraState = initialState, { type, payload }: ActionType): AddCameraState => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload }
    case SET_TITLE:
      return { ...state, title: payload }
    case SET_HOST_ADDRESS:
      return { ...state, hostAddress: payload }
    case SET_PORT_ADDRESS:
      return { ...state, portAddress: payload }
    default:
      return state
  }
}

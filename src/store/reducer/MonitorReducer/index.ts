import {
  SET_LOADING,
  SET_LIST_CAMERA,
  ADD_CAMERA_MONITOR,
  MonitorState,
  ActionType
} from './types'

const initialState: MonitorState = {
  loading: false,
  listCamera: []
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state: MonitorState = initialState, { type, payload }: ActionType): MonitorState => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload }
    case SET_LIST_CAMERA:
      return { ...state, listCamera: payload }
    case ADD_CAMERA_MONITOR:
      return { ...state, listCamera: [...state.listCamera, payload] }
    default:
      return state
  }
}

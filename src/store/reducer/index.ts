import { combineReducers } from 'redux'

import MonitorReducer from './MonitorReducer'
import { MonitorState } from './MonitorReducer/types'
import AddCameraReducer from './AddCameraReducer'
import { AddCameraState } from './AddCameraReducer/types'

export interface ApplicationState {
  MonitorReducer: MonitorState
  AddCameraReducer: AddCameraState
}

const rootReducer = combineReducers({
  MonitorReducer,
  AddCameraReducer
})

export default rootReducer

import { combineReducers } from 'redux'

import MonitorReducer from './MonitorReducer'
import { MonitorState } from './MonitorReducer/types'

export interface ApplicationState {
  MonitorReducer: MonitorState
}

const rootReducer = combineReducers({
  MonitorReducer
})

export default rootReducer

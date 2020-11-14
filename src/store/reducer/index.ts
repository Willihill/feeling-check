import { combineReducers } from 'redux'

import MonitorReducer from './MonitorReducer'
import { MonitorState } from './MonitorReducer/types'
import AddCameraReducer from './AddCameraReducer'
import { AddCameraState } from './AddCameraReducer/types'
import PersonReducer from './PersonReducer'
import { PersonState } from './PersonReducer/types'
import AddPersonReducer from './AddPersonReducer'
import { AddPersonState } from './AddPersonReducer/types'
import ReportReducer from './ReportReducer'
import { ReportState } from './ReportReducer/types'

export interface ApplicationState {
  MonitorReducer: MonitorState
  AddCameraReducer: AddCameraState
  PersonReducer: PersonState
  AddPersonReducer: AddPersonState
  ReportReducer: ReportState
}

const rootReducer = combineReducers({
  MonitorReducer,
  AddCameraReducer,
  PersonReducer,
  AddPersonReducer,
  ReportReducer
})

export default rootReducer

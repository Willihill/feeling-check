import { combineReducers } from 'redux'

import MonitorReducer from './MonitorReducer'
import { MonitorState } from './MonitorReducer/types'
import AddCameraReducer from './AddCameraReducer'
import { AddCameraState } from './AddCameraReducer/types'
import PersonReducer from './PersonReducer'
import { PersonState } from './PersonReducer/types'
import AddPersonReducer from './AddPersonReducer'
import { AddPersonState } from './AddPersonReducer/types'

export interface ApplicationState {
  MonitorReducer: MonitorState
  AddCameraReducer: AddCameraState
  PersonReducer: PersonState
  AddPersonReducer: AddPersonState
}

const rootReducer = combineReducers({
  MonitorReducer,
  AddCameraReducer,
  PersonReducer,
  AddPersonReducer
})

export default rootReducer

import HttpBase from '../HttpBase'
import { AddPersonState } from '../../../store/reducer/AddPersonReducer/types'
import { PersonProps } from '../../../store/reducer/PersonReducer/types'

export const postPersonService = async (data: AddPersonState) =>
  await HttpBase.post('/person', data)

export const getPersonService = async () =>
  await HttpBase.get<{pessoas: PersonProps[]}>('/person')

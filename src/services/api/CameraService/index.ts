import HttpBase from '../HttpBase'
import { AddCameraState } from '../../../store/reducer/AddCameraReducer/types'
import { postCameraFactory } from './factory'

export const postCameraService = async (data: AddCameraState) =>
  await HttpBase.post('/Camera', postCameraFactory(data))

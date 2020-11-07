import HttpBase from '../HttpBase'
import { AddCameraState } from '../../../store/reducer/AddCameraReducer/types'
import { postCameraFactory } from './factory'
import { CameraProps } from '../../../store/reducer/MonitorReducer/types'

export const postCameraService = async (data: AddCameraState) =>
  await HttpBase.post('/camera', postCameraFactory(data))

export const getCameraService = async () =>
  await HttpBase.get<{cameras: CameraProps[]}>('/camera')

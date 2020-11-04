import { AddCameraState } from '../../../store/reducer/AddCameraReducer/types'

export const postCameraFactory = (data: AddCameraState) => ({
  ip: `http://${data.hostAddress}:${data.portAddress}`,
  title: data.title
})

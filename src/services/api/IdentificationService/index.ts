import { ReportState } from '../../../store/reducer/ReportReducer/types'
import HttpBase from '../HttpBase'
import { IPostIdentificationProps } from './types'

export const postIdentificationService = async (data: IPostIdentificationProps) =>
  await HttpBase.post('/identification', data)

export const getIdentificationsServiceApi = async (dateIni: string, dateFin: string, cameraId: number) =>
  await HttpBase.get<{ Identificacoes: ReportState[]}>(`/identification?dateIni=${dateIni}&dateFin=${dateFin}${cameraId > 0 ? `&cameraId=${cameraId}` : ''}`)

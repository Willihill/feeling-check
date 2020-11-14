import { ChartData } from 'chart.js'
import { Action } from 'redux'
import { PersonProps } from '../PersonReducer/types'

export const SET_LOADING = 'ReportReducer/SET_LOADING'
export const SET_IDENTIFICATIONS = 'ReportReducer/SET_IDENTIFICATIONS'
export const SET_DATE_INI = 'ReportReducer/SET_DATE_INI'
export const SET_DATE_FIN = 'ReportReducer/SET_DATE_FIN'
export const SET_CAMERA_ID = 'ReportReducer/SET_CAMERA_ID'
export const SET_DATA_LINE_CHART = 'ReportReducer/SET_DATA_LINE_CHART'

export interface IdentificationProps {
  cameraTitle: string
  captureImage: string
  capturedAt: string
  emotion: string
  person: Omit<PersonProps, 'id'>
}

export interface ReportState {
  loading: boolean
  dateIni: string
  dateFin: string
  cameraId: number
  identifications: IdentificationProps[]
  emotions: Array<{
    name: string
    color: string
  }>
  dataLineChart: ChartData
}

export interface ActionType extends Action {
  type: string
  payload: any
}

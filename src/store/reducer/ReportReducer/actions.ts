import { ChartData } from 'chart.js'
import {
  SET_LOADING,
  SET_IDENTIFICATIONS,
  SET_DATE_INI,
  SET_DATE_FIN,
  SET_CAMERA_ID,
  SET_DATA_LINE_CHART,
  ReportState
} from './types'

export const setLoadingReportAction = (payload: boolean) => ({ type: SET_LOADING, payload })
export const setIdentificationsAction = (payload: ReportState[]) => ({ type: SET_IDENTIFICATIONS, payload })
export const setDateIniReportAction = (payload: string) => ({ type: SET_DATE_INI, payload })
export const setDateFinReportAction = (payload: string) => ({ type: SET_DATE_FIN, payload })
export const setCameraIdReportAction = (payload: number) => ({ type: SET_CAMERA_ID, payload })
export const setDataLineChartReportAction = (payload: ChartData) => ({ type: SET_DATA_LINE_CHART, payload })

import {
  SET_LOADING,
  SET_IDENTIFICATIONS,
  SET_DATE_INI,
  SET_DATE_FIN,
  SET_CAMERA_ID,
  SET_DATA_LINE_CHART,
  ReportState,
  ActionType
} from './types'

const date = new Date()
date.setHours(0)
const dateIni = date.toISOString()

const initialState: ReportState = {
  loading: false,
  dateIni: dateIni,
  dateFin: new Date().toISOString(),
  cameraId: 0,
  identifications: [],
  emotions: [
    {
      name: 'Raiva',
      color: 'rgb(255, 99, 132)'
    },
    {
      name: 'Nojo',
      color: 'rgb(255, 99, 132)'
    },
    {
      name: 'Medo',
      color: 'rgb(255, 99, 132)'
    },
    {
      name: 'Feliz',
      color: 'rgb(255, 99, 132)'
    },
    {
      name: 'Triste',
      color: 'rgb(255, 99, 132)'
    },
    {
      name: 'Raiva',
      color: 'rgb(255, 99, 132)'
    },
    {
      name: 'Surpreso',
      color: 'rgb(255, 99, 132)'
    },
    {
      name: 'Neutro',
      color: 'rgb(255, 99, 132)'
    }],
  dataLineChart: {}
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state: ReportState = initialState, { type, payload }: ActionType): ReportState => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload }
    case SET_IDENTIFICATIONS:
      return { ...state, identifications: payload }
    case SET_DATE_INI:
      return { ...state, dateIni: payload }
    case SET_DATE_FIN:
      return { ...state, dateFin: payload }
    case SET_CAMERA_ID:
      return { ...state, cameraId: payload }
    case SET_DATA_LINE_CHART:
      return { ...state, dataLineChart: payload }
    default:
      return state
  }
}

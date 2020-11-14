import { ChartData } from 'chart.js'
import { Dispatch } from 'redux'
import { ApplicationState } from '../store/reducer'
import { setLoadingReportAction, setIdentificationsAction, setDataLineChartReportAction } from '../store/reducer/ReportReducer/actions'
import { getIdentificationsServiceApi } from './api/IdentificationService'

export const getIdentificationsService = () => {
  return async (dispatch: Dispatch, getState: () => ApplicationState) => {
    const { ReportReducer } = getState()
    dispatch(setLoadingReportAction(true))

    const { data } = await getIdentificationsServiceApi(ReportReducer.dateIni, ReportReducer.dateFin, ReportReducer.cameraId)

    dispatch(setIdentificationsAction(data.Identificacoes))

    setTimeout(() => getDataLineChartService()(dispatch, getState), 500)
  }
}

interface DatesGroup {
  date: Date
  emotions: Array<{
    name: string
    count: number
  }>
}

export const getDataLineChartService = () => {
  return (dispatch: Dispatch, getState: () => ApplicationState) => {
    const { ReportReducer } = getState()

    const ajustaData = (date: string): Date => {
      const d = new Date(date)
      d.setHours(d.getUTCHours())
      return d
    }

    const dateToDateGroup = (date: Date): Date => {
      return new Date(`${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate().toString().padStart(2, '0')}T${(date.getUTCHours() - 3).toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0').substring(0, 1)}0:00`)
    }

    // Agrupando horario a cada 10 minutos
    const dates = ReportReducer.identifications
      .map(item => ajustaData(item.capturedAt))
      .sort((a, b) => a > b ? 1 : -1)

    const datesIgnore: Date[] = []
    var datesGroup: DatesGroup[] = []

    const setEmotionDatesGroup = (date: Date, emotion: string) => {
      datesGroup = datesGroup.map(item => {
        if (item.date.toISOString() !== date.toISOString()) return item
        emotion = emotion === '' ? 'Neutro' : emotion

        const otherEmotions = item.emotions.filter(item => item.name !== emotion)
        const emo = item.emotions.find(item => item.name === emotion)
        const count = emo ? emo.count + 1 : 1

        return {
          date: date,
          emotions: [
            ...otherEmotions,
            {
              name: emotion,
              count
            }
          ]
        }
      })
    }

    dates.map(item => {
      if (datesIgnore.includes(item)) return null
      const dateMinFilterSon = dateToDateGroup(item)
      const filhos = dates.filter(son => dateToDateGroup(son).toISOString() === dateMinFilterSon.toISOString())

      // Seta a data minima na lista de datas agrupadas
      datesGroup.push({
        date: dateMinFilterSon,
        emotions: []
      })

      filhos.map(son => {
        const identification = ReportReducer.identifications.find(item => ajustaData(item.capturedAt).toISOString() === son.toISOString())
        identification && setEmotionDatesGroup(dateMinFilterSon, identification.emotion)
        datesIgnore.push(son)
      })

      datesIgnore.push(item)
    })

    var emotionsGroup: Array<{
      name: string
      color: string
      data: number[]
    }> = []

    // Setando os valores iniciais das emoções
    ReportReducer.emotions.map(({ name, color }) =>
      emotionsGroup.push({
        name,
        color,
        data: []
      })
    )

    datesGroup.map(item => {
      emotionsGroup = emotionsGroup.map(emoGrp => {
        const emoDate = item.emotions.find(emoDate => emoDate.name === emoGrp.name)
        return {
          name: emoGrp.name,
          color: emoGrp.color,
          data: [...emoGrp.data, emoDate ? emoDate.count : 0]
        }
      })
    })

    const data: ChartData = {
      labels: datesGroup.map(({ date }) => `${date.getUTCDay().toString().padStart(2, '0')}/${date.getUTCMonth().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0')}`),
      datasets: emotionsGroup.map(({ name, color, data }) => ({
        label: name,
        data: data,
        fill: false,
        backgroundColor: color,
        borderColor: color,
        yAxisID: 'y-axis',
        borderWidth: 0.8,
        hidden: data.length > 0 && data.reduce((prev, cur) => cur + prev) <= 0
      }))
    }

    dispatch(setDataLineChartReportAction(data))
    dispatch(setLoadingReportAction(false))
  }
}

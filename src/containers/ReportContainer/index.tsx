import React, { useEffect } from 'react'
import { ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'

import { getIdentificationsService } from '../../services/ReportService'
import { ApplicationState } from '../../store/reducer'

import './styles.css'
import { setCameraIdReportAction, setDateFinReportAction, setDateIniReportAction } from '../../store/reducer/ReportReducer/actions'
import ReportCard from '../../components/ReportCard'

export default () => {
  const { ReportReducer } = useSelector((state: ApplicationState) => state)
  const dispatch = useDispatch()

  const options: ChartOptions = {
    legend: {
      labels: {
        fontColor: '#fff'
      }
    },
    title: {
      fontColor: '#fff'
    },
    tooltips: {
      titleFontColor: '#fff'
    },
    scales: {
      scaleLabel: {
        fontColor: '#FFF'
      },
      round: 'minute',
      xAxes: [
        {
          gridLines: {
            color: 'gray'
          },
          ticks: {
            fontColor: '#fff',
            fontFamily: 'Mulish'
          }
        }
      ],
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis',
          gridLines: {
            color: 'gray'
          },
          ticks: {
            fontColor: '#fff',
            fontFamily: 'Mulish'
          }
        }
      ]
    }
  }

  useEffect(() => {
    dispatch(getIdentificationsService())
  }, [])

  const onChangeDateIni = (event: any) => {
    const date = new Date(new Date(event.target.value).toISOString().replace('Z', '+03:00'))
    dispatch(setDateIniReportAction(date.toISOString()))
  }

  const onChangeDateFin = (event: any) => {
    const date = new Date(new Date(event.target.value).toISOString().replace('Z', '+03:00'))
    dispatch(setDateFinReportAction(date.toISOString()))
  }

  const onChangeCameraId = (event: any) => {
    dispatch(setCameraIdReportAction(parseInt(event.target.value)))
  }

  const onPressRefresh = () => {
    dispatch(getIdentificationsService())
  }

  return (
    <div className='cntReport'>
      <div className='headerReport'>
        <div>
          <Line data={ReportReducer.dataLineChart} options={options} />
        </div>
      </div>

      <div className='cntEmotions'>
        <div className='cntFilters'>
          <div className='cntFilter'>
            <label htmlFor='dateIni'>Data inicial</label>
            <input type='datetime-local' id='dateIni' name='dateIni' onChange={onChangeDateIni} />
          </div>
          <div className='cntFilter'>
            <label htmlFor='dateFin'>Data final</label>
            <input type='datetime-local' id='dateFin' name='dateFin' onChange={onChangeDateFin} />
          </div>
          <div className='cntFilter'>
            <label htmlFor='cam'>Camera</label>
            <input type='number' id='cam' name='cam' min={0} onChange={onChangeCameraId} />
          </div>

          <div className='cntFilter refreshReport' onClick={onPressRefresh}>
            <span className='icon-refresh' />
          </div>
        </div>

        <div className='cntList'>
          {ReportReducer.identifications.map((item, idx) => {
            const date = new Date(item.capturedAt)
            return (
              <ReportCard
                key={idx}
                emotion={item.emotion}
                image={item.captureImage}
                name={item.person.name}
                camera={item.cameraTitle}
                capturedAt={`${date.getUTCDay().toString().padStart(2, '0')}/${date.getUTCMonth().toString().padStart(2, '0')} ${date.getUTCHours().toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0')}`}
              />
            )
          }
          )}
        </div>
      </div>
    </div>
  )
}

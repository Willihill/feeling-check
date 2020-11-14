import React, { useEffect } from 'react'
import { ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'

import { getIdentificationsService } from '../../services/ReportService'
import { ApplicationState } from '../../store/reducer'

import './styles.css'

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
            <input type='datetime-local' id='dateIni' name='dateIni' />
          </div>
          <div className='cntFilter'>
            <label htmlFor='dateFin'>Data final</label>
            <input type='datetime-local' id='dateFin' name='dateFin' />
          </div>
          <div className='cntFilter'>
            <label htmlFor='cam'>Camera</label>
            <input type='datetime-local' id='cam' name='cam' />
          </div>
        </div>

        {ReportReducer.identifications.map((item, idx) => (
          <span key={idx}>{item.person.name}</span>
        ))}
      </div>
    </div>
  )
}

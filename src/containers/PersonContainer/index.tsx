import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import ButtonAdd from '../../components/ButtonAdd'
import PersonCard from '../../components/PersonCard'
import { getPersonsService } from '../../services/PersonService'
import { ApplicationState } from '../../store/reducer'

import './styles.css'

export default () => {
  const { PersonReducer } = useSelector((state: ApplicationState) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getPersonsService())
  }, [])

  const onPressAdd = () => navigate('add')
  const onPressClose = () => navigate('/')

  return (
    <div className='cntCameraList'>
      <span className='icon-close-round' onClick={onPressClose} />
      <div className='contentList'>
        <div className='titleList'>
          <span>lista de pessoas</span>
        </div>

        <div className='flexOneCenter'>
          {PersonReducer.loading
            ? (
              <span>Carregando pessoas</span>
            )
            : (
              <>
                <div className='listContentHorizontal'>
                  {PersonReducer.listPerson.map((item, idx) => (
                    <PersonCard
                      key={idx}
                      name={item.name}
                      profile={item.imageFace}
                    />
                  ))}
                </div>
                <ButtonAdd
                  onPress={onPressAdd}
                />
              </>
            )}
        </div>
      </div>

      <Outlet />
    </div>
  )
}

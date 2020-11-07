import React, { useRef, useEffect, VideoHTMLAttributes } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ButtonLoading from '../../components/ButtonLoading'
import CaptureProfile from '../../components/CaptureProfile'
import InputText from '../../components/InputText'
import { addPersonService } from '../../services/PersonService'
import { ApplicationState } from '../../store/reducer'
import { setImagePersonAction, setNamePersonAction } from '../../store/reducer/AddPersonReducer/actions'

import './styles.css'

export default () => {
  const { AddPersonReducer } = useSelector((state: ApplicationState) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChangeName = (value: string) => dispatch(setNamePersonAction(value))
  const onChangeImageFace = (image: string) => dispatch(setImagePersonAction(image))

  const onPressSend = () => dispatch(addPersonService())
  const onPressClose = () => navigate('/person')

  return (
    <div className='cntCameraList'>
      <span className='icon-close-round' onClick={onPressClose} />
      <div className='contentList'>
        <div className='titleList'>
          <span>Cadastro de pessoa</span>
        </div>

        <div className='flexOneCenter'>
          <div className='formPerson'>
            <CaptureProfile
              image={AddPersonReducer.imageFace}
              onChangeImage={onChangeImageFace}
            />

            <InputText
              label='Nome'
              value={AddPersonReducer.name}
              onChangeText={onChangeName}
            />

            <span className='heightSpacing' />

            <ButtonLoading
              label='Salvar'
              onPress={onPressSend}
              loading={AddPersonReducer.loading}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

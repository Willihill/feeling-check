import { Dispatch } from 'redux'
import { ApplicationState } from '../store/reducer'
import { setLoadingAddPersonAction } from '../store/reducer/AddPersonReducer/actions'
import { setListPersonAction, setLoadingPersonAction } from '../store/reducer/PersonReducer/actions'
import { PersonProps } from '../store/reducer/PersonReducer/types'
import { asyncPromise } from '../utils/helpers/promise'
import { getPersonService, postPersonService } from './api/PersonService'

export const getPersonsService = () => {
  return async (dispatch: Dispatch, getState: () => ApplicationState) => {
    const { PersonReducer } = getState()

    if (PersonReducer.loading) return

    dispatch(setLoadingPersonAction(true))

    const { data } = await getPersonService()

    dispatch(setListPersonAction(data.pessoas))
    dispatch(setLoadingPersonAction(false))

    // setTimeout(() => {
    //   const persons: PersonProps[] = [
    //     {
    //       name: 'Big B',
    //       imageFace: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMU4jxZDwACfgFlouQ1nAAAAABJRU5ErkJggg=='
    //     },
    //     {
    //       name: 'Cleitin',
    //       imageFace: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=='
    //     },
    //     {
    //       name: 'Comissão',
    //       imageFace: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=='
    //     },
    //     {
    //       name: 'Baby Shark',
    //       imageFace: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=='
    //     }
    //   ]
    //   dispatch(setListPersonAction(persons))
    //   dispatch(setLoadingPersonAction(false))
    // }, 50)
  }
}

export const addPersonService = () => {
  return async (dispatch: Dispatch, getState: () => ApplicationState) => {
    const { AddPersonReducer } = getState()

    dispatch(setLoadingAddPersonAction(true))
    const [error] = await asyncPromise(postPersonService(AddPersonReducer))

    // REMOVER ESSA LINHA
    getPersonsService()(dispatch, getState)

    if (error) {
      console.log(error)
      alert('Erro ao cadastrar pessoa.')
    }

    getPersonsService()(dispatch, getState)
    dispatch(setLoadingAddPersonAction(false))
  }
}

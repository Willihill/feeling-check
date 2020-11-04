import HttpBase from '../HttpBase'
import { IPostIdentificationProps } from './types'

export const postIdentificationService = async (data: IPostIdentificationProps) =>
  await HttpBase.post('/Identification', data)

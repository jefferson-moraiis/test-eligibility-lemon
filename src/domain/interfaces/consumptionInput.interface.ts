import {connectionTypesEnum,consumptionTypesEnum,modalityTariffEnum} from '../enums'

export interface IConsumptionInput {
  documentNumber: String ,
  connectionType: connectionTypesEnum,
  consumptionType: consumptionTypesEnum,
  modalityTariff: modalityTariffEnum,
  historyConsumption: number[]
}


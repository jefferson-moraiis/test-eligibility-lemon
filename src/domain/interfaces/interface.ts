import {connectionTypesEnum,consumptionTypesEnum,modalityTariffEnum} from '../enum'

export interface customerConsumption {
  documentNumber: String , //TODO: create validate: [cpf, cnpj],
  connectionType: connectionTypesEnum,
  consumptionType: consumptionTypesEnum,
  modalityTariff: modalityTariffEnum,
  historyConsumption: number[]
}
export interface eligibility {
  eligible: boolean,
  reasonsIneligibility?: string[]
  AnnualSavingsCO2?: string
}


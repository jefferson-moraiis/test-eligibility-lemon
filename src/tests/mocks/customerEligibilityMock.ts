import { IConsumptionInput } from '../../domain/interfaces/consumptionInput.interface';
import { connectionTypesEnum, consumptionTypesEnum, modalityTariffEnum } from "../../domain/enums";

export const ineligibleCustomerMock: IConsumptionInput = {
  documentNumber: '',
  connectionType: connectionTypesEnum.triphasic,
  consumptionType: consumptionTypesEnum.publicPower,
  modalityTariff: modalityTariffEnum.blue,
  historyConsumption: [
    78,
    60,
    376,
    100,
    481,
    70,
    80,
    120,
    450,
    65,
    144,
    89,
    98
  ]
}

export const eligibleCustomerMock: IConsumptionInput = {
  documentNumber: '',
  connectionType: connectionTypesEnum.singlePhase,
  consumptionType: consumptionTypesEnum.residential,
  modalityTariff: modalityTariffEnum.white,
  historyConsumption: [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160,
    6941,
    4597
  ]
}
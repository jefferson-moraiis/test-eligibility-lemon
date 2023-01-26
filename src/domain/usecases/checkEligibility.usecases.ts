import { connectionTypesEnum, consumptionTypesEnum, modalityTariffEnum } from '../enums'
import { IConsumptionInput } from '../interfaces'
import { ConsumptionCalculation } from './consumptionCalculation.usecases'

export class CheckEligibility {
  private readonly historyConsumption: number[]
  private readonly connectionType: connectionTypesEnum
  private readonly consumptionType:consumptionTypesEnum
  private readonly modalityTariff: modalityTariffEnum
  private readonly consumptions: ConsumptionCalculation

  constructor({ historyConsumption, connectionType, consumptionType, modalityTariff }: IConsumptionInput) {
    this.historyConsumption = historyConsumption
    this.connectionType = connectionType
    this.consumptionType = consumptionType
    this.modalityTariff = modalityTariff
    this.consumptions = new ConsumptionCalculation(this.historyConsumption)
  }

  checkConsumptionMin(): boolean | string {
    const consumptionMin = {
      monofasico: 400,
      bifasico: 500,
      trifasico: 750,
    };
    if (this.consumptions.averageCalculation() >= consumptionMin[this.connectionType]) {
      return true
    }
    return 'Tipo de conexão não aceita devido o consumo'
  }

  checkConsumptionType(): boolean | string {
    const eligible = !([consumptionTypesEnum.publicPower, consumptionTypesEnum.rural]).includes(this.consumptionType)
    return eligible ? eligible : 'Classe de consumo não aceita'
  }

  checkModalityTariff(): boolean | string {
    const eligible = [modalityTariffEnum.conventional, modalityTariffEnum.white].includes(this.modalityTariff)
    return eligible ? eligible : 'Modalidade tarifária não aceita'
  }
}
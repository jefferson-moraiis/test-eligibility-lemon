import { connectionTypesEnum, consumptionTypesEnum, modalityTariffEnum } from '../enums'
import { ConsumptionCalculation } from './consumptionCalculation.usecases'

export class CheckEligibility {
  private readonly consumptions: ConsumptionCalculation

  constructor(){
    this.consumptions = new ConsumptionCalculation()
  }

  checkConsumptionMin(historyConsumption:number[],connectionType:connectionTypesEnum): boolean | string {
    const consumptionMin = {
      monofasico: 400,
      bifasico: 500,
      trifasico: 750,
    };
    if (this.consumptions.averageCalculation(historyConsumption) >= consumptionMin[connectionType]) {
      return true
    }
    return 'Tipo de conexão não aceita devido o consumo'
  }

  checkConsumptionType(consumptionType:consumptionTypesEnum): boolean | string {
    const eligible = !([consumptionTypesEnum.publicPower, consumptionTypesEnum.rural]).includes(consumptionType)
    return eligible ? eligible : 'Classe de consumo não aceita'
  }

  checkModalityTariff(modalityTariff: modalityTariffEnum): boolean | string {
    const eligible = [modalityTariffEnum.conventional, modalityTariffEnum.white].includes(modalityTariff)
    return eligible ? eligible : 'Modalidade tarifária não aceita'
  }
}
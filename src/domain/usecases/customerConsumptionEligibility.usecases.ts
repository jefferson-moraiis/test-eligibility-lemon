import { connectionTypesEnum, consumptionTypesEnum, modalityTariffEnum } from '../enums';
import { IEligibilityResult, IConsumptionInput } from '../interfaces'
import { ConsumptionCalculation } from './consumptionCalculation.usecases'
import { CheckEligibility } from './index';
import { checkBody } from '../../main/entities/inputCheck.entities';

export class CustomerConsumptionEligibility {
  private connectionType: connectionTypesEnum
  private consumptionType: consumptionTypesEnum
  private modalityTariff: modalityTariffEnum
  private historyConsumption: number[]
  private check: CheckEligibility
  private consumption: ConsumptionCalculation

  constructor(input: IConsumptionInput) {
    this.connectionType = input.connectionType
    this.consumptionType = input.consumptionType
    this.modalityTariff =input.modalityTariff
    this.historyConsumption = input.historyConsumption
    this.check = new CheckEligibility()
    this.consumption = new ConsumptionCalculation()
  }

  private ineligibleResult(reasonsIneligibility: string[]): IEligibilityResult {
    return { eligible: false, reasonsIneligibility }
  }

  private eligibilityResult(annualSavingsCO2: number): IEligibilityResult {
    return { eligible: true, annualSavingsCO2 }
  }


  public checkEligibility(): IEligibilityResult {
      const checkEligibility = [
      this.check.checkConsumptionMin(this.historyConsumption,this.connectionType),
      this.check.checkConsumptionType(this.consumptionType),
      this.check.checkModalityTariff(this.modalityTariff)
      ]
      const isEligible = checkEligibility.filter((result) => result === true).length >= 3
      const ineligible = checkEligibility.filter((result) => result !== true) as []
      return isEligible ? this.eligibilityResult(this.consumption.c02Calculation(this.historyConsumption))
        : this.ineligibleResult(ineligible)

  };
}

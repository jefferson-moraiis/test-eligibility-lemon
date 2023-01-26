import { IEligibilityResult, IConsumptionInput } from '../interfaces'
import { ConsumptionCalculation } from './consumptionCalculation.usecases'
import { CheckEligibility } from './index';


export class CustomerConsumptionEligibility {
  private check: CheckEligibility
  private consumption: ConsumptionCalculation

  constructor(consumptionInput: IConsumptionInput) {
    this.check = new CheckEligibility(consumptionInput)
    this.consumption = new ConsumptionCalculation(consumptionInput.historyConsumption)
  }

  private ineligibleResult(reasonsIneligibility: string[]): IEligibilityResult {
    return { eligible: false, reasonsIneligibility }
  }

  private eligibilityResult(annualSavingsCO2: number): IEligibilityResult {
    return { eligible: true, annualSavingsCO2 }
  }


  checkEligibility(): IEligibilityResult {
    const checkEligibility = [
      this.check.checkConsumptionMin(),
      this.check.checkConsumptionType(),
      this.check.checkModalityTariff()
    ]
    const isEligible = checkEligibility.filter((result) => result === true).length > 0
    const ineligible = checkEligibility.filter((result) => result !== true) as []
    return isEligible ? this.eligibilityResult(this.consumption.c02Calculation())
      : this.ineligibleResult(ineligible)
  };
}
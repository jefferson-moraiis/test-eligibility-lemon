import {eligibility,customerConsumption} from '../interfaces/interface'
import {consumptionTypesEnum,modalityTariffEnum} from '../enum'



class eligibilityDto implements eligibility {
  eligible: boolean
  reasonsIneligibility: string[]
  AnnualSavingsCO2: string

  constructor(eligible,AnnualSavingsCO2?) {
    this.eligible = eligible
    this.reasonsIneligibility = ["Classe de consumo não aceita","Modalidade tarifária não aceita"]
    this.AnnualSavingsCO2 = AnnualSavingsCO2
  }
}
export class customerConsumptionEligibility {

  constructor(private readonly customerConsumption:customerConsumption) {}

  //O cálculo deve ser feito utilizando a média dos 12 valores mais recentes do histórico de consumo.
  calcConsumptionMed(historyConsumption):number {
    return historyConsumption.slice(-12).reduce((acc, current) => acc + current)  / historyConsumption.length
  }

  calcC02(historyConsumption:number[]):number {
    const kgInC02 = 84 / 1000
    const averageConsumption = this.calcConsumptionMed(historyConsumption)
    const annualProjectionConsumption= averageConsumption * 12;
    return Number((annualProjectionConsumption * kgInC02).toFixed(2))
  }


  checkConsumptionMin(historyConsumption,connectionType): boolean {
    const minConsumption = {
      monofasico: 400,
      bifasico: 500,
      trifasico: 750,
    };
    if (this.calcConsumptionMed(historyConsumption) >= minConsumption[connectionType]) {
        return true
    }
    return false
  }

  checkConsumptionType (consumptionType): boolean {
    const eligibility = [consumptionTypesEnum.publicPower,consumptionTypesEnum.rural]
    return !eligibility.includes(consumptionType)
  }

  checkModalityTariff (modalityTariff): boolean {
    const eligibility = [modalityTariffEnum.conventional,modalityTariffEnum.white]
    return eligibility.includes(modalityTariff)
  }


  isEligible(): boolean {
    const {consumptionType,modalityTariff,connectionType,historyConsumption} =this.customerConsumption;
    const minConsumption = this.checkConsumptionMin(historyConsumption,connectionType)
    const consumptionValidate = this.checkConsumptionType(consumptionType)
    const modalityValidate = this.checkModalityTariff(modalityTariff)
    return (consumptionValidate && modalityValidate && minConsumption)
  }

  async perform() {
    const {historyConsumption} =this.customerConsumption

    return this.isEligible() ? new eligibilityDto(true,this.calcC02(historyConsumption)) : new eligibilityDto(false)
  }
}
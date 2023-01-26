import { customerConsumptionEligibility } from "../domain/usecases";
import { eligibleCustomerMock, ineligibleCustomerMock} from './mocks/customerEligibilityMock'

describe('customer consumption', () => {
  it('should return customer is not eligible ', async() => {
      const sut = new customerConsumptionEligibility(ineligibleCustomerMock);

      const {eligible,reasonsIneligibility} = await sut.perform()

      expect(eligible).toBe(false);
      expect(reasonsIneligibility).toEqual(["Classe de consumo não aceita", "Modalidade tarifária não aceita"])
  })

  it('should return customer is eligible ', async() => {

      const sut = new customerConsumptionEligibility(eligibleCustomerMock);

      const {eligible,AnnualSavingsCO2} = await sut.perform()

      expect(eligible).toBe(true);
      expect(AnnualSavingsCO2).toEqual(5553.24)
  })
})
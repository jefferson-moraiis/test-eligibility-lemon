import { CustomerConsumptionEligibility } from "../domain/usecases";
import { eligibleCustomerMock, ineligibleCustomerMock } from './mocks/customerEligibilityMock'

describe('customer consumption', () => {
  it('should return customer is ineligible', () => {
    const sut = new CustomerConsumptionEligibility(ineligibleCustomerMock);

    const ineligible = sut.checkEligibility()

    expect(ineligible).toEqual(expect.objectContaining({
      eligible: expect.any(Boolean), reasonsIneligibility: expect.any(Array<string>)
    }))
  })

  it('should return customer is eligible ', () => {

    const sut = new CustomerConsumptionEligibility(eligibleCustomerMock);

    const eligible = sut.checkEligibility()

    expect(eligible).toEqual(expect.objectContaining({
      eligible: expect.any(Boolean), annualSavingsCO2: expect.any(Number)
    }))
  })
})
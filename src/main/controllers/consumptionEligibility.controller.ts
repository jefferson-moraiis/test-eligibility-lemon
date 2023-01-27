import { Request, Response } from 'express'
import { CustomerConsumptionEligibility } from '../../domain/usecases'

export class ConsumptionEligibilityController {

  handle(request: Request, response: Response) {
    try {
      const result = new CustomerConsumptionEligibility(request.body).checkEligibility()
      return response.status(200).json(result)
    } catch (error) {
      throw new Error(`Error check customer eligibility:${error.data}`);
    }
  }
}

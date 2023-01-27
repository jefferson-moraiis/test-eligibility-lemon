import { Request, Response } from 'express'
import { CustomerConsumptionEligibility } from '../../domain/usecases'
import { checkBody } from '../entities/inputCheck.entities';
export class ConsumptionEligibilityController {

  async handle({body}: Request, response: Response) {

    try {
      const data = await checkBody(body);
      const result = new CustomerConsumptionEligibility(data).checkEligibility()
      return response.status(200).json(result)
    } catch (error) {
      response.status(500).json(error.message)
    }
  }
}

import { Router } from 'express'
import { ConsumptionEligibilityController } from '../controllers/consumptionEligibility.controller'

const router: Router = Router()

router.post("/check-eligibility", new ConsumptionEligibilityController().handle)


export { router };
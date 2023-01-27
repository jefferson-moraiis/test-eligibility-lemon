export const consumptionOutputSuccessSchema ={
  type: 'object',
  properties: {
    eligible: {
      type: 'boolean',
    },
    reasonsIneligibility: {
      type: 'array',
    }
  },
  required: ['eligible', 'reasonsIneligibility"'],
}


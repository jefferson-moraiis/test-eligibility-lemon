export default {
  type: 'object',
  properties: {
    eligible: {
      type: 'boolean',
    },
    annualSavingsCO2: {
      type: 'number'
    }
  },
  required: ['eligible', 'annualSavingsCO2'],
}


export const consumptionInputSchema = {
  type: 'object',
  properties: {
    documentNumber: {
      type: 'string',
      default:'14041737706'
    },
    connectionType: {
      type: 'string',
      default:'bifasico'
    },
    consumptionType: {
      type: 'string',
      default: 'comercial'
    },
    modalityTariff: {
      type: 'string',
      default: 'convencional'
    },
    historyConsumption: {
      type: 'array',
      default:[
        3878,
        9760,
        5976,
        2797,
        2481,
        5731,
        7538,
        4392,
        7859,
        4160,
        6941,
        4597
      ]
    },
  },
  required: ['documentNumber', 'connectionType', 'consumptionType', 'modalityTariff', 'historyConsumption'],
}



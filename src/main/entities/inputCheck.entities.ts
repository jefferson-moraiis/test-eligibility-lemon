import joi from "joi";

export const checkBody = (input) => {
  return joi.object().keys({
    documentNumber: joi.string().min(9).max(14).required(),
    connectionType: joi.string().required(),
    consumptionType: joi.string().required(),
    modalityTariff: joi.string().required(),
    historyConsumption: joi.array().items(joi.number()).required()
  }).validateAsync(input);
}
export class ConsumptionCalculation {
  averageCalculation(historyConsumption: number[]): number {
    return (
      historyConsumption
        .slice(-12)
        .reduce((acc, current) => acc + current) /
      historyConsumption.length
    );
  }

  c02Calculation(historyConsumption: number[]): number {
    const kgInC02 = 84 / 1000;
    const averageConsumption = this.averageCalculation(historyConsumption);
    const annualProjectionConsumption = averageConsumption * 12;
    return Number((annualProjectionConsumption * kgInC02).toFixed(2));
  }
}

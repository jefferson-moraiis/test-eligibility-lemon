export class ConsumptionCalculation {
  constructor(private readonly historyConsumption: number[]) {
    this.historyConsumption = historyConsumption;
  }

  averageCalculation(): number {
    return (
      this.historyConsumption
        .slice(-12)
        .reduce((acc, current) => acc + current) /
      this.historyConsumption.length
    );
  }

  c02Calculation(): number {
    const kgInC02 = 84 / 1000;
    const averageConsumption = this.averageCalculation();
    const annualProjectionConsumption = averageConsumption * 12;
    return Number((annualProjectionConsumption * kgInC02).toFixed(2));
  }
}

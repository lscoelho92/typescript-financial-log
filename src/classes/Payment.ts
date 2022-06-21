import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    if (this.amount > 0 && this.details) {
      return `${this.recipient} owes $${this.amount} for ${this.details}`;
    } else {
      return "Please insert an amount greater than 0 and an payment detail.";
    }
  }
}

import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    if (this.amount > 0 && this.details) {
      return `${this.client} owes $${this.amount} for ${this.details}`;
    } else {
      return "Please insert an amount greater than 0 and an invoice detail.";
    }
  }
}

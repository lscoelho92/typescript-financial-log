export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        if (this.amount > 0 && this.details) {
            return `${this.client} owes $${this.amount} for ${this.details}`;
        }
        else {
            return "Please insert an amount greater than 0 and an invoice detail.";
        }
    }
}

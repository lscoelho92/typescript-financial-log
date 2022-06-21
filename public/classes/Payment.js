export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        if (this.amount > 0 && this.details) {
            return `${this.recipient} owes $${this.amount} for ${this.details}`;
        }
        else {
            return "Please insert an amount greater than 0 and an payment detail.";
        }
    }
}

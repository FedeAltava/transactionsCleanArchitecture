export class TransactionDate {
    constructor(private readonly value: string) { }

    static create(transactionDate: string): TransactionDate {
        if (!transactionDate) {
            throw new Error("Date is required");
        }

        if(isNaN(Date.parse(transactionDate))) {
            throw new Error("Invalid date");
        }
        
        const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (!isoDateRegex.test(transactionDate)) {
            throw new Error("Invalid date format. Expected YYYY-MM-DD");
        }

        return new TransactionDate(transactionDate);
    }
    
    valueOf(): string {
        return this.value;
    }   
    equals(other: TransactionDate): boolean {
        return this.value === other.valueOf();
    }
}
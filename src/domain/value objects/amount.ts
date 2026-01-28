export class Amount {
    constructor(private readonly value: number) { }

    static create(amount: number): Amount {
        if (isNaN(amount) || !isFinite(amount)) {
            throw new Error("Amount must be a valid number");
        }
        return new Amount(amount);
    }

    valueOf(): number {
        return this.value;
    }
    equals(other: Amount): boolean {
        return this.value === other.valueOf();
    }
}
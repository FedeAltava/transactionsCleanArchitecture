export class Id {
    constructor(private readonly value: string) { }

    valueOf(): string {
        return this.value;
    }

    static createId(max: number = 1000000): Id {
        if (max <= 0) {
            throw new Error("Max must be a positive number");
        }
        return new Id(Math.floor(Math.random() * max).toString());
    }
    equals(other: Id): boolean {
        return this.value === other.valueOf();
    }
}
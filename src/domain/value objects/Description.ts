export class Description {

    constructor(private readonly value: string) { }

    static create(description: string): Description {
        if (description.trim().length === 0) {
            throw new Error("Description cannot be empty");
        }
        if (description.length > 255) {
            throw new Error("Description cannot be longer than 255 characters");
        }
        return new Description(description);
    }

    valueOf(): string {
        return this.value;
    }
    equals(other: Description): boolean {
        return this.value === other.valueOf();
    }
}
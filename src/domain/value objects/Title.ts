export class Title {

    constructor(private readonly value: string) { }

    static create(title: string): Title {
        if (title.trim().length === 0) {
            throw new Error("Title cannot be empty");
        }
        if (title.length > 255) {
            throw new Error("Title cannot be longer than 255 characters");
        }
        return new Title(title);
    }

    valueOf(): string {
        return this.value;
    }
    equals(other: Title): boolean {
        return this.value === other.valueOf();
    }
}
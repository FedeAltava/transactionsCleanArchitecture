const CategoryEnum = {
    FOOD: 'Food',
    TRANSPORT: 'Transport',
    UTILITIES: 'Utilities',
    ENTERTAINMENT: 'Entertainment',
    HEALTHCARE: 'Healthcare',
    EDUCATION: 'Education',
    PERSONAL_CARE: 'Personal Care',
    MISCELLANEOUS: 'Miscellaneous',
} as const;

export type CategoryType = typeof CategoryEnum[keyof typeof CategoryEnum];

export class Category {

    private constructor(private readonly value: CategoryType) { }

    static create(category: CategoryType): Category {
        if (!Object.values(CategoryEnum).includes(category)) {
            throw new Error(`Invalid category: ${category}`);
        }
        return new Category(category);
    }

    valueOf(): CategoryType {
        return this.value;
    }
    equals(other: Category): boolean {
        return this.value === other.valueOf();
    }
}

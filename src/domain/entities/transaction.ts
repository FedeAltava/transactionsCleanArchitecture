import { Category, CategoryType } from "../value objects/category";
import { Description } from "../value objects/description";
import { Id } from "../value objects/id";
import { TransactionDate } from "../value objects/transactionDate";
import { Amount } from "../value objects/amount";

export interface TransactionDataObject {
    amount: number;
    transactionDate: string;
    description: string;
    category: CategoryType;
}

export interface TransactionJSON extends TransactionDataObject {
    id: string;
}

export interface TransactionParams extends TransactionDataObject {
    id: string | undefined;
}

export class TransactionEntity {
    constructor(readonly id: Id, readonly amount: Amount, readonly date: TransactionDate, readonly description: Description, readonly category: Category) { }

    toJson(): TransactionJSON {

        return {
            id: this.id.valueOf(),
            amount: this.amount.valueOf(),
            transactionDate: this.date.valueOf(),
            description: this.description.valueOf(),
            category: this.category.valueOf()
        };
    }


    static create({ id, amount, transactionDate, description, category }: TransactionParams): TransactionEntity {
        return new TransactionEntity(
            id ? new Id(id) : Id.createId(),
            Amount.create(amount),
            TransactionDate.create(transactionDate),
            Description.create(description),
            Category.create(category)
        );
    }


    update({ amount, transactionDate, description, category }: Partial<TransactionParams>): TransactionEntity {
        return TransactionEntity.create({
            id: this.id.valueOf(),
            amount: amount ? amount : this.amount.valueOf(),
            transactionDate: transactionDate ? transactionDate : this.date.valueOf(),
            description: description ? description : this.description.valueOf(),
            category: category ? category : this.category.valueOf(),
        }
        );
    }

    equals(other: TransactionEntity): boolean {
        return this.id.valueOf() === other.id.valueOf();
    }


}
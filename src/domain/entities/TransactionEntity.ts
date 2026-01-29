import { Category, CategoryType } from "../value objects/Category";
import { Description } from "../value objects/Description";
import { Id } from "../value objects/Id";
import { TransactionDate } from "../value objects/TransactionDate";
import { Amount } from "../value objects/Amount";

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
    constructor(readonly id: Id, readonly amount: Amount, readonly transactionDate: TransactionDate, readonly description: Description, readonly category: Category) { }

    toJSON(): TransactionJSON {

        return {
            id: this.id.valueOf(),
            amount: this.amount.valueOf(),
            transactionDate: this.transactionDate.valueOf(),
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
            transactionDate: transactionDate ? transactionDate : this.transactionDate.valueOf(),
            description: description ? description : this.description.valueOf(),
            category: category ? category : this.category.valueOf(),
        }
        );
    }

    equals(other: TransactionEntity): boolean {
        return this.id.valueOf() === other.id.valueOf();
    }


}
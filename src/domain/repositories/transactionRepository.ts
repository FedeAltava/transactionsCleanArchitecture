import { TransactionEntity } from "../entities/transaction";
import { Id } from "../value objects/id";

export interface TransactionRepository{
    create(transaction: TransactionEntity): Promise<TransactionEntity>;
    getById(id: Id): Promise<TransactionEntity | null>;
    getAll(): Promise<TransactionEntity[]>;
    update(transaction: TransactionEntity): Promise<TransactionEntity>;
    delete(id: Id): Promise<void>;
}
    
import { TransactionEntity, TransactionJSON } from "../entities/TransactionEntity";
import { Id } from "../value objects/Id";

export interface TransactionRepository{
    save(transaction: TransactionEntity): Promise<void>;
    getById(id: Id): Promise<TransactionEntity | null>;
    getAll(): Promise<TransactionEntity[]>;
    update(transactionParams: TransactionJSON): Promise<void>;
    delete(id: Id): Promise<void>;
}
    
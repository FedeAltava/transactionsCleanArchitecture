import { TransactionEntity } from "../../domain/entities/transaction";
import { TransactionRepository } from "../../domain/repositories/transactionRepository";
import { Id } from "../../domain/value objects/id";
export class InMemoryRepository implements TransactionRepository {

    private transactions: TransactionEntity[] = [];

    constructor() { }

    async create(transaction: TransactionEntity): Promise<TransactionEntity> {
        try {
            this.transactions.push(transaction);
            return transaction;
        } catch (error) {

            throw new Error(`Error at create transaction: ${error}`);
        }
    }

    async getById(id: Id): Promise<TransactionEntity | null> {
        try {
            const transaction = this.transactions.find(t => t.id.equals(id));
            return transaction || null;
        } catch (error) {
            throw new Error(`Error at find transaction: ${error}`);
        }
    }

    async getAll(): Promise<TransactionEntity[]> {
        try {
            return this.transactions;
        } catch (error) { 
            throw new Error(`Error at get all transactions: ${error}`);
        }
    }


    async update(transaction: TransactionEntity): Promise<TransactionEntity> {
        throw new Error("Method not implemented.");
    }
    async delete(id: Id): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
import { TransactionEntity, TransactionJSON } from "../../domain/entities/TransactionEntity";
import { TransactionRepository } from "../../domain/repositories/TransactionRepository";
import { Id } from "../../domain/value objects/Id";
export class InMemoryRepository implements TransactionRepository {

    private transactions: TransactionEntity[] = [];

    constructor() { }

    async save(transaction: TransactionEntity): Promise<void> {
        try {
            if(this.transactions.find(t => t.id.equals(transaction.id))) {
                throw new Error("Transaction with this ID already exists");
            }
            this.transactions.push(transaction);

        } catch (error) {

            throw new Error("Error creating transaction", { cause: error });
        }
    }

    async getById(id: Id): Promise<TransactionEntity | null> {
        try {
            const transaction = this.transactions.find(t => t.id.equals(id));
            return transaction || null;
        } catch (error) {
            throw new Error("Error finding transaction", { cause: error });
        }
    }

    async getAll(): Promise<TransactionEntity[]> {
        try {
            return this.transactions;
        } catch (error) {
            throw new Error("Error getting all transactions", { cause: error });
        }
    }


    async update({ id, amount, transactionDate, description, category }: TransactionJSON): Promise<void> {
        try {

            const index = this.transactions.findIndex(t => t.id.valueOf() === id);

            if (index === -1) {
                throw new Error("Transaction not found");

            }else{

                const existingTransaction = this.transactions[index];

                if (!existingTransaction) {
                    throw new Error("Transaction not found at index");
                }

                const updatedTransaction = existingTransaction.update({
                    amount,
                    transactionDate,
                    description,
                    category
                });

                this.transactions[index] = updatedTransaction;
            }

        } catch (error) {
            throw new Error("Error updating transaction", { cause: error });
        }
    }

    async delete(id: Id): Promise<void> {
        try {
            this.transactions = this.transactions.filter(t => !t.id.equals(id));
        } catch (error) {
            throw new Error("Error deleting transaction", { cause: error });
        }

    }
}
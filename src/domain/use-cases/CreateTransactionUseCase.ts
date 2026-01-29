import { TransactionEntity, TransactionParams } from "../entities/TransactionEntity"
import { TransactionRepository } from "../repositories/TransactionRepository";

export class CreateTransactionUseCase {
    constructor(private readonly transactionRepository: TransactionRepository) { }
    
    async execute({id, amount, transactionDate, description, category}: TransactionParams): Promise<void> {
        if (!amount || !transactionDate || !description || !category) {
            throw new Error("Transaction data is required to create a transaction.");
        }

        const transaction = TransactionEntity.create({id, amount, transactionDate, description, category});

        await this.transactionRepository.create(transaction);
        if (!transaction) {
            throw new Error("Failed to create transaction.");
        }
        if (!transaction.equals(transaction)) {
            throw new Error("Created transaction does not match the input data.");
        }
    }
}
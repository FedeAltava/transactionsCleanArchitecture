import { TransactionEntity, TransactionParams } from "../entities/TransactionEntity"
import { TransactionRepository } from "../repositories/TransactionRepository";

export class CreateTransactionUseCase {
    constructor(private readonly transactionRepository: TransactionRepository) { }
    
    async execute({id, amount, transactionDate, title: description, category}: TransactionParams): Promise<TransactionEntity> {
        if (!amount || !transactionDate || !description || !category) {
            throw new Error("Transaction data is required to create a transaction.");
        }

        const transaction = TransactionEntity.create({id, amount, transactionDate, title: description, category});

        await this.transactionRepository.save(transaction);
        if (!transaction) {
            throw new Error("Failed to create transaction.");
        }
        if (!transaction.equals(transaction)) {
            throw new Error("Created transaction does not match the input data.");
        }
        return transaction;
    }
} 
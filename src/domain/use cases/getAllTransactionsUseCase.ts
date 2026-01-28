import { TransactionEntity } from "../entities/transaction";
import { TransactionRepository } from "../repositories/transactionRepository";

export class getAllTransactionsUseCase {
    constructor(private readonly transactionRepository: TransactionRepository) { }
    
    async execute(): Promise<TransactionEntity[]> {
        if (!this.transactionRepository) {
            throw new Error("Transaction repository is not available.");
        }
        const transactions = await this.transactionRepository.getAll();
        return transactions;
    }
}
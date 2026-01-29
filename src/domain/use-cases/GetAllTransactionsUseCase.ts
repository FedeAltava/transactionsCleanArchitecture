import { TransactionEntity } from "../entities/TransactionEntity";
import { TransactionRepository } from "../repositories/TransactionRepository";

export class GetAllTransactionsUseCase {
    constructor(private readonly transactionRepository: TransactionRepository) { }
    
    async execute(): Promise<TransactionEntity[]> {
        if (!this.transactionRepository) {
            throw new Error("Transaction repository is not available.");
        }
        const transactions = await this.transactionRepository.getAll();
        return transactions;
    }
}
import {  TransactionJSON } from "../entities/TransactionEntity";
import { TransactionRepository } from "../repositories/TransactionRepository";


export class UpdateTransactionUseCase {
    constructor(private readonly transactionRepository: TransactionRepository) { }
    
    async execute({ id, amount, transactionDate, description, category}: TransactionJSON): Promise<void> {
        const transaction: TransactionJSON = { id, amount, transactionDate, description, category};
        await this.transactionRepository.update(transaction);
    }
    
}
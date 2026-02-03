import {  TransactionJSON } from "../entities/TransactionEntity";
import { TransactionRepository } from "../repositories/TransactionRepository";


export class UpdateTransactionUseCase {
    constructor(private readonly transactionRepository: TransactionRepository) { }
    
    async execute({ id, amount, transactionDate, title: description, category}: TransactionJSON): Promise<void> {
        const transaction: TransactionJSON = { id, amount, transactionDate, title: description, category};
        await this.transactionRepository.update(transaction);
    }
    
}
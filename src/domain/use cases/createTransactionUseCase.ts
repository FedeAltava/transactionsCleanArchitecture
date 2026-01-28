import { TransactionEntity } from "../entities/transaction"
import { TransactionRepository } from "../repositories/transactionRepository";

export class CreateTransactionUseCase {
    constructor(private readonly transactionRepository: TransactionRepository) { }
    
    async execute(transactionData: TransactionEntity): Promise<void> {
        if (!transactionData) {
            throw new Error("Transaction data is required to create a transaction.");
        }
        if(transactionData.amount.valueOf() <= 0){
            throw new Error("Transaction amount must be greater than zero.");
        }
        const transaction = TransactionEntity.create({
            id: undefined,
            amount: transactionData.amount.valueOf(),
            transactionDate: transactionData.date.valueOf(),
            description: transactionData.description.valueOf(),
            category: transactionData.category.valueOf()
        });
        await this.transactionRepository.create(transaction);
    }
}
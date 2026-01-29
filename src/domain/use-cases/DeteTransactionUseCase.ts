import { TransactionRepository } from "../repositories/TransactionRepository";
import { Id } from "../value objects/Id";

export class DeleteTransactionUseCase {
    constructor(private readonly transactionRepository: TransactionRepository) { }

    async execute(id: Id): Promise<void> {
        if (!id) {
            throw new Error("Transaction ID is required for deletion.");
        }
        
        if(id === null || id === undefined){
            throw new Error("Transaction ID cannot be null or undefined.");
        }

        await this.transactionRepository.delete(id);
    }
}   
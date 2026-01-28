import { TransactionRepository } from "../repositories/transactionRepository";
import { Id } from "../value objects/id";

export class updateTransactionUseCase {
    constructor(private readonly transactionRepository: TransactionRepository) { }
    
    async execute(id: Id): Promise<void> {
        await this.transactionRepository.update(id);
    }
}
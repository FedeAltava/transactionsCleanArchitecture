import { TransactionEntity } from "../entities/transaction";
import { TransactionRepository } from "../repositories/transactionRepository";
import { Id } from "../value objects/id";

export class getByIdTransactionUseCase {
    constructor(private readonly transactionRepository: TransactionRepository) { }

    async execute(id: Id): Promise<TransactionEntity> {
        if (!id) {
            throw new Error("ID is required");
        }
        if (typeof id !== "string") {
            throw new Error("ID must be a string");
        }

        const transaction = await this.transactionRepository.getById(id);
        return transaction;
    }
}
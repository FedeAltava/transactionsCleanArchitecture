import { TransactionEntity } from "../entities/TransactionEntity";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { Id } from "../value objects/Id";

export class GetByIdTransactionUseCase {
    constructor(private readonly transactionRepository: TransactionRepository) { }

    async execute(id: Id): Promise<TransactionEntity> {
        if (!id) {
            throw new Error("ID is required");
        }
        if (typeof id !== "string") {
            throw new Error("ID must be a string");
        }

        const transaction = await this.transactionRepository.getById(id);
        if (!transaction) {
            throw new Error(`Transaction with ID ${id} not found`);
        }
        return transaction;
    }
}
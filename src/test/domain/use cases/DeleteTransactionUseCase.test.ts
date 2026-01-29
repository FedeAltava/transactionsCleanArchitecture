import { test, describe, expect } from 'vitest';
import { DeleteTransactionUseCase } from '../../../domain/use-cases/DeteTransactionUseCase';
import { CreateTransactionUseCase } from '../../../domain/use-cases/CreateTransactionUseCase';
import { TransactionEntity } from '../../../domain/entities/TransactionEntity';
import { Id } from '../../../domain/value objects/Id';
import { InMemoryRepository } from '../../../infrastructure/repositories/InMemoryRepository';

describe('DeleteTransactionUseCase', () => {
    test('should delete an existing transaction', async () => {
        const transactionRepository = new InMemoryRepository();
        const createTransactionUseCase = new CreateTransactionUseCase(transactionRepository);
        const deleteTransactionUseCase = new DeleteTransactionUseCase(transactionRepository);
        const transactions: TransactionEntity[] = [];

        const transactionData = {
            id: 'test-id-123',
            amount: 200.00,
            transactionDate: '2023-10-10',
            description: 'Utility bill',
            category: 'Food' as const,
        };

        const transaction = await createTransactionUseCase.execute(transactionData);
        transactions.push(transaction);
        const storedTransaction = await transactionRepository.getById(transaction.id);
        expect(storedTransaction).not.toBeNull();
        if (!storedTransaction) return;
        expect(transaction.equals(storedTransaction)).toBe(true);
        await deleteTransactionUseCase.execute(storedTransaction.id);
    });
}); 
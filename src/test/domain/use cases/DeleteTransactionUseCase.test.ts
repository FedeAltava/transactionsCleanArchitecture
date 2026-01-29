import {test, describe, expect } from 'vitest';
import { DeleteTransactionUseCase } from '../../../domain/use-cases/DeteTransactionUseCase'; 
import { InMemoryRepository } from '../../../infrastructure/repositories/InMemoryRepository';
import { CreateTransactionUseCase } from '../../../domain/use-cases/CreateTransactionUseCase';

describe('DeleteTransactionUseCase', () => {
    test('should delete an existing transaction', async () => {
        const transactionRepository = new InMemoryRepository();
        const createTransactionUseCase = new CreateTransactionUseCase(transactionRepository);
        const deleteTransactionUseCase = new deleteTransactionUseCase(transactionRepository);

        // First, create a transaction to be deleted
        const transactionData = {
            id: undefined,
            amount: 200.00,
            transactionDate: '2023-11-01',
            description: 'Utility bill',
            category: 'Bills' as const,
        };

        const transaction = await createTransactionUseCase.execute(transactionData);

        // Now, delete the created transaction
        await deleteTransactionUseCase.execute(transaction.id.valueOf());

        // Verify that the transaction has been deleted
        const deletedTransaction = await transactionRepository.getById(transaction.id);
        expect(deletedTransaction).toBeNull();
    });
});
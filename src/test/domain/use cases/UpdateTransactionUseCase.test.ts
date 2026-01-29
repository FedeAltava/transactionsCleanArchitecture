import {describe, expect, test} from 'vitest';
import {UpdateTransactionUseCase} from '../../../domain/use-cases/UpdateTransactionUseCase';
import {CreateTransactionUseCase} from '../../../domain/use-cases/CreateTransactionUseCase';
import {InMemoryRepository} from '../../../infrastructure/repositories/InMemoryRepository';
import { Id } from '../../../domain/value objects/Id';

describe('UpdateTransactionUseCase', () => {
    test('should update an existing transaction', async () => {
        const transactionRepository = new InMemoryRepository();
        const createTransactionUseCase = new CreateTransactionUseCase(transactionRepository);
        const updateTransactionUseCase = new UpdateTransactionUseCase(transactionRepository);

        const transactionData = {
            id: 'test-id-123',
            amount: 200.00,
            transactionDate: '2023-10-10',
            description: 'Utility bill',
            category: 'Food' as const,
        };

        await createTransactionUseCase.execute(transactionData);

        const updatedData = {
            id: 'test-id-123',
            amount: 250.00,
            transactionDate: '2023-10-11',
            description: 'Updated utility bill',
            category: 'Utilities' as const,
        };

        await updateTransactionUseCase.execute(updatedData);

        const updatedTransaction = await transactionRepository.getById(new Id('test-id-123'));

        expect(updatedTransaction).not.toBeNull();
        if (!updatedTransaction) return;

        expect(updatedTransaction.amount.valueOf()).toBe(updatedData.amount);
        expect(updatedTransaction.transactionDate.valueOf()).toBe(updatedData.transactionDate);
        expect(updatedTransaction.description.valueOf()).toBe(updatedData.description);
        expect(updatedTransaction.category.valueOf()).toBe(updatedData.category);
    });
}); 
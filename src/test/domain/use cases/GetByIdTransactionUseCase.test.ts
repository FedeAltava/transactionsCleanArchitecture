import {describe, expect, test} from 'vitest';
import {GetByIdTransactionUseCase} from '../../../domain/use-cases/GetByIdTransactionUseCase';
import {CreateTransactionUseCase} from '../../../domain/use-cases/CreateTransactionUseCase';
import {InMemoryRepository} from '../../../infrastructure/repositories/InMemoryRepository';
import { Id } from '../../../domain/value objects/Id';

describe('GetByIdTransactionUseCase', () => {
    test('should retrieve all transactions', async () => {
        const transactionRepository = new InMemoryRepository();
        const createTransactionUseCase = new CreateTransactionUseCase(transactionRepository);
        const getByIdTransactionUseCase = new GetByIdTransactionUseCase(transactionRepository);

        const transactionsData = [
            {
                id: 'transaction-1',
                amount: 100.00,
                transactionDate: '2023-10-01',
                description: 'Grocery shopping',
                category: 'Food' as const,
            },
            {
                id: 'transaction-2',
                amount: 50.00,
                transactionDate: '2023-10-02',
                description: 'Gas refill',
                category: 'Transport' as const,
            },
        ];

        for (const data of transactionsData) {
            await createTransactionUseCase.execute(data);
        }

        const transaction = await getByIdTransactionUseCase.execute(new Id('transaction-1'));

        expect(transaction).toBeDefined();

        if (transaction) {
            expect(transaction.id.valueOf()).toBe('transaction-1');
            expect(transaction.amount.valueOf()).toBe(100.00);
            expect(transaction.transactionDate.valueOf()).toBe('2023-10-01');
            expect(transaction.description.valueOf()).toBe('Grocery shopping');
            expect(transaction.category.valueOf()).toBe('Food');
        }
    });
});
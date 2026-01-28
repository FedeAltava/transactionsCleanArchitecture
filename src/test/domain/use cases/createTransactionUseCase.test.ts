import {test,describe} from 'vitest';
import { CreateTransactionUseCase } from '../../../domain/use cases/createTransactionUseCase';
import { TransactionDate } from '../../../domain/value objects/transactionDate';
import { TransactionEntity } from '../../../domain/entities/transaction';
import { InMemoryTransactionRepository } from '../../mocks/inMemoryTransactionRepository';

describe('CreateTransactionUseCase', () => {
    test('should create and store a new transaction', async () => {
        const transactionRepository = new InMemoryTransactionRepository();
        const createTransactionUseCase = new CreateTransactionUseCase(transactionRepository);

        const transactionData = {
            amount: 150.75,
            transactionDate: '2023-10-05',
            description: 'Grocery shopping',
            category: 'Food' as const
        };

        const transaction = await createTransactionUseCase.execute(transactionData);

        if (transaction.amount.valueOf() !== transactionData.amount) {
            throw new Error('Transaction amount does not match');
        }
        if (transaction.date.valueOf() !== transactionData.transactionDate) {
            throw new Error('Transaction date does not match');
        }
        if (transaction.description.valueOf() !== transactionData.description) {
            throw new Error('Transaction description does not match');
        }
        if (transaction.category.valueOf() !== transactionData.category) {
            throw new Error('Transaction category does not match');
        }

        const storedTransaction = await transactionRepository.getById(transaction.id.valueOf());

        if (!transaction.equals(storedTransaction)) {
            throw new Error('Stored transaction does not match the created transaction');
        }
    });
});
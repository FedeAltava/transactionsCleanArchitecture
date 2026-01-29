import {describe, expect, test} from 'vitest';
import {GetAllTransactionsUseCase} from '../../../domain/use-cases/GetAllTransactionsUseCase';
import {CreateTransactionUseCase} from '../../../domain/use-cases/CreateTransactionUseCase';
import {TransactionEntity} from '../../../domain/entities/TransactionEntity';
import {InMemoryRepository} from '../../../infrastructure/repositories/InMemoryRepository';

describe('GetAllTransactions    UseCase', () => {
    test('should retrieve all transactions', async () => {
        const transactionRepository = new InMemoryRepository();
        const createTransactionUseCase = new CreateTransactionUseCase(transactionRepository);
        const getAllTransactionsUseCase = new GetAllTransactionsUseCase(transactionRepository);

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

        const allTransactions = await getAllTransactionsUseCase.execute();

        expect(allTransactions.length).toBe(transactionsData.length);

        if(allTransactions.length === 0) return;

        allTransactions.forEach((transaction) => {
            const matchingData = transactionsData.find(data => data.id === transaction.id.valueOf());
            expect(matchingData).toBeDefined();
            if (!matchingData) return;
            expect(transaction.amount.valueOf()).toBe(matchingData.amount);
            expect(transaction.transactionDate.valueOf()).toBe(matchingData.transactionDate);
            expect(transaction.description.valueOf()).toBe(matchingData.description);
            expect(transaction.category.valueOf()).toBe(matchingData.category);
        }); 
    });
});
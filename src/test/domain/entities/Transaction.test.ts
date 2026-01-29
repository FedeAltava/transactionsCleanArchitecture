import {test, describe} from 'vitest';
import { TransactionDate } from '../../../domain/value objects/TransactionDate';

describe('TransactionDate Value Object', () => {
    test('should create a TransactionDate with valid date', () => {
        const dateStr = '2023-10-05';
        const transactionDate = TransactionDate.create(dateStr);
        if (transactionDate.valueOf() !== dateStr) {
            throw new Error('TransactionDate value does not match the input date string');
        }
    });

    test('should throw error for invalid date format', () => {
        const invalidDateStr = '05-10-2023';
        try {
            TransactionDate.create(invalidDateStr);
            throw new Error('Expected error was not thrown');
        } catch (error) {
            if (!(error instanceof Error)) {
                throw error;
            }
            if (error.message !== 'Invalid date format. Expected YYYY-MM-DD') {
                throw new Error('Unexpected error message: ' + error.message);
            }
        }
    });

    test('should throw error for empty date string', () => {
        const emptyDateStr = '';
        try {
            TransactionDate.create(emptyDateStr);
            throw new Error('Expected error was not thrown');
        } catch (error) {
            if (!(error instanceof Error)) {
                throw error;
            }
            if (error.message !== 'Date is required') {
                throw new Error('Unexpected error message: ' + error.message);
            }
        }
    });

    test('should throw error for invalid date', () => {
        const invalidDateStr = '2023-02-30';
        try {
            TransactionDate.create(invalidDateStr);
            throw new Error('Expected error was not thrown');
        } catch (error) {
            if (!(error instanceof Error)) {
                throw error;
            }
            if (error.message !== 'Invalid date') {
                throw new Error('Unexpected error message: ' + error.message);
            }
        }
    });
});


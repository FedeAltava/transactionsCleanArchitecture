import { describe, test } from "vitest";
import { TransactionDate } from "../../../domain/value objects/TransactionDate.js";

describe("TransactionDate Value Object", () => {
    test("should create a TransactionDate with a valid value", () => {
        const date = "2023-01-01";
        const transactionDate = TransactionDate.create(date);
        if (transactionDate.valueOf().toString() !== date.toString()) {
            throw new Error("TransactionDate value is incorrect");
        }
    });

    test("should throw an error when creating a TransactionDate with an invalid value", () => {
        try {
            TransactionDate.create("invalid-date");
            throw new Error("Expected error was not thrown");
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("Incorrect error message");
            }
        }
    });
});
import { describe,test, } from "vitest";
import { Amount } from "../../../domain/value objects/Amount.js";

describe("Amount Value Object", () => {
    test("should create an Amount with a valid value", () => {
        const amount = Amount.create(100);
        if (amount.valueOf() !== 100) {
            throw new Error("Amount value is incorrect");
        }
    });

    test("should throw an error when creating an Amount with an invalid value", () => {
        try {
            Amount.create(NaN);
            throw new Error("Expected error was not thrown");
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("Incorrect error message");
            }
        }
    });
});

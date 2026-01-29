import { describe, test } from "vitest";
import { Description } from "../../../domain/value objects/Description.js";

describe("Description Value Object", () => {
    test("should create a Description with a valid value", () => {
        const description = Description.create("Grocery shopping");
        if (description.valueOf() !== "Grocery shopping") {
            throw new Error("Description value is incorrect");
        }
    });

    test("should throw an error when creating a Description with an invalid value", () => {
        try {
            Description.create("");
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("Incorrect error message");
            }
        }
    });
}); 
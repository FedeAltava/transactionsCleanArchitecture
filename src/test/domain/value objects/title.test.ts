import { describe, test } from "vitest";
import { Title } from "../../../domain/value objects/Title.js";

describe("Title Value Object", () => {
    test("should create a Title with a valid value", () => {
        const title = Title.create("Grocery shopping");
        if (title.valueOf() !== "Grocery shopping") {
            throw new Error("Title value is incorrect");
        }
    });

    test("should throw an error when creating a Title with an invalid value", () => {
        try {
            Title.create("");
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("Incorrect error message");
            }
        }
    });
}); 
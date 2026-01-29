import { describe, test } from "vitest";
import { Category } from "../../../domain/value objects/Category.js";

describe("Category Value Object", () => {
    test("should create a Category with a valid value", () => {
        const category = Category.create("Food");
        if (category.valueOf() !== "Food") {
            throw new Error("Category value is incorrect");
        }
    });
});
import { describe, test } from "vitest";
import { Id } from "../../../domain/value objects/Id.js";
describe("Id Value Object", () => {
    test("should create an Id with a valid value", () => {
        const id = new Id("123e4567-e89b-12d3-a456-426614174000");
        if (id.valueOf() !== "123e4567-e89b-12d3-a456-426614174000") {
            throw new Error("Id value is incorrect");
        }
    });

    test("should create an Id with a generated value", () => {
        const id = Id.createId();
        if (!id.valueOf()) {
            throw new Error("Generated Id value is incorrect");
        }
    });
});
import { useNavigate } from "react-router-dom";
import { useDependencies } from "../useContextComponent";
import { useState } from "react";
import { CategoryType } from "../../../domain/value objects/Category";
import "./addTransaction.css";

export const AddTransaction = () => {
    const { createTransactionUseCase } = useDependencies();
    const navigate = useNavigate();
    const [amount, setAmount] = useState<number>(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState<CategoryType>("Transport");


    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();


        const dateStr = new Date().toISOString().split('T')[0] as string;

        await createTransactionUseCase.execute({
            id: crypto.randomUUID(),
            amount,
            description,
            transactionDate: dateStr,
            category,
        });
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit} className="addTransactionForm">
            <h2>New Transaction</h2>
            <input type="text"
                placeholder="Description"
                name="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            <input type="number"
                placeholder="Amount"
                name="amount"
                required
                min="1"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))} />
            <label htmlFor="category">Category
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as CategoryType)}
                >
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
            </label>
            <button type="submit" className="addTransactionButton">Add Transaction</button>
        </form>
    );
}
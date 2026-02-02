import { useEffect, useState } from "react";
import { useDependencies } from "../useContextComponent";
import { TransactionEntity } from "../../../domain/entities/TransactionEntity";
import "./listTransactionsStyle.css";
import { useNavigate } from "react-router-dom";

export const ListTransactions = () => {
    const { getAllTransactionsUseCase } = useDependencies();
    const [transactions, setTransactions] = useState<TransactionEntity[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchTransactions = async () => {
            const allTransactions = await getAllTransactionsUseCase.execute();
            setTransactions(allTransactions);
        };
        fetchTransactions();
    }, [getAllTransactionsUseCase]);

    return (
        <div className="transactionsBoard">
            <h1>Personal Finance Lite</h1>
            {transactions.length > 0 ? (

                <ul>
                    {transactions.map(transaction => (
                        <li key={transaction.id.valueOf()}>
                            {transaction.description.valueOf()} - ${transaction.amount.valueOf()} on {transaction.transactionDate.valueOf()}
                        </li>
                    ))}
                </ul>

            ) : (
                <p>No transactions found.</p>

            )}
            <div className="addTransactionButtonDiv">
                <button className="addTransactionButton" onClick={() => navigate("/addTransaction")}>
                    Add Transaction
                </button>
            </div>
        </div>
    );
};
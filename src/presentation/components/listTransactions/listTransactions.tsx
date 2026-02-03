import { useEffect, useState } from "react";
import { useDependencies } from "../useContextComponent";
import { TransactionEntity } from "../../../domain/entities/TransactionEntity";
import "./listTransactionsStyle.css";
import { useNavigate } from "react-router-dom";
import { Id } from "../../../domain/value objects/Id";

export const ListTransactions = () => {
const { getAllTransactionsUseCase, deleteTransactionUseCase } = useDependencies();
    const [transactions, setTransactions] = useState<TransactionEntity[]>([]);
    const navigate = useNavigate();

   
    const fetchTransactions = async () => {
        const allTransactions = await getAllTransactionsUseCase.execute();
        setTransactions([...allTransactions]); 
    };

    useEffect(() => {
        fetchTransactions();
    }, [getAllTransactionsUseCase]);

    const handleDelete = async (id: Id) => {
      
        await deleteTransactionUseCase.execute(id);
        const allTransactions = await getAllTransactionsUseCase.execute();
        setTransactions([...allTransactions]);
    }
    
    return (
        <div className="transactionsBoard">
            <h1>Personal Finance Lite</h1>
            {transactions.length > 0 ? (

                <ul>
                    {transactions.map(transaction => (
                        <div key={transaction.id.valueOf()} className="transactionItem">
                            <li key={transaction.id.valueOf()} className="transactionValues">
                                <div>
                                    {transaction.title.valueOf()}
                                </div>
                                <div className={transaction.amount.valueOf() < 0 ? "amountNegative" : "amountPositive"}>
                                    {transaction.amount.valueOf()}
                                </div>
                                <div className="category">
                                    {transaction.category.valueOf()}
                                </div>
                                <div>
                                    {transaction.transactionDate.valueOf()}
                                </div>
                                <div>
                                    <button className="deleteButton" onClick={() => handleDelete(transaction.id)}>X</button>
                                </div>

                            </li>

                        </div>
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
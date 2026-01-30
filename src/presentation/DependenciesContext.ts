import React, { createContext, useContext } from 'react';
import { CreateTransactionUseCase } from '../domain/use-cases/CreateTransactionUseCase';
import { DeleteTransactionUseCase } from '../domain/use-cases/DeteTransactionUseCase';
import { GetAllTransactionsUseCase } from '../domain/use-cases/GetAllTransactionsUseCase';
import { GetByIdTransactionUseCase } from '../domain/use-cases/GetByIdTransactionUseCase';
import { UpdateTransactionUseCase } from '../domain/use-cases/UpdateTransactionUseCase';


export interface AppDependencies {
    createTransactionUseCase: CreateTransactionUseCase;
    deleteTransactionUseCase: DeleteTransactionUseCase;
    getAllTransactionsUseCase: GetAllTransactionsUseCase;
    getByIdTransactionUseCase: GetByIdTransactionUseCase;
    updateTransactionUseCase: UpdateTransactionUseCase;
}

const DependenciesContext = createContext<AppDependencies | null>(null);

export const DependenciesProvider: React.FC<{ dependencies: AppDependencies; children: React.ReactNode }> = 
({ dependencies, children }) => (
    React.createElement(
        DependenciesContext.Provider,
        { value: dependencies },
        children
    )
);

export const useDependencies = () => {
    const context = useContext(DependenciesContext);
    if (!context) throw new Error("useDependencies must be used within a DependenciesProvider");
    return context;
};
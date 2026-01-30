import React from 'react';
import ReactDOM from 'react-dom/client';
import { InMemoryRepository} from "./infrastructure/repositories/InMemoryRepository";
import { CreateTransactionUseCase } from "./domain/use-cases/CreateTransactionUseCase";
import { DeleteTransactionUseCase } from "./domain/use-cases/DeteTransactionUseCase";
import { GetAllTransactionsUseCase } from "./domain/use-cases/GetAllTransactionsUseCase";
import { GetByIdTransactionUseCase } from "./domain/use-cases/GetByIdTransactionUseCase";
import { UpdateTransactionUseCase } from "./domain/use-cases/UpdateTransactionUseCase";
import { DependenciesProvider } from './presentation/DependenciesContext';
import App from '../src/presentation/App';

const repository = new InMemoryRepository();

const dependencies ={
    createTransactionUseCase: new CreateTransactionUseCase(repository),
    deleteTransactionUseCase: new DeleteTransactionUseCase(repository),
    getAllTransactionsUseCase: new GetAllTransactionsUseCase(repository),
    getByIdTransactionUseCase: new GetByIdTransactionUseCase(repository),
    updateTransactionUseCase: new UpdateTransactionUseCase(repository),
} 

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DependenciesProvider dependencies={dependencies}>
            <App />
            </DependenciesProvider>
        </React.StrictMode>
    );
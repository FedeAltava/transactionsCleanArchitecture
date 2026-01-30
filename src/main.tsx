import { InMemoryRepository } from "./infrastructure/repositories/InMemoryRepository";
import { CreateTransactionUseCase } from "./domain/use-cases/CreateTransactionUseCase";
import { DeleteTransactionUseCase } from "./domain/use-cases/DeteTransactionUseCase";
import { GetAllTransactionsUseCase } from "./domain/use-cases/GetAllTransactionsUseCase";
import { GetByIdTransactionUseCase } from "./domain/use-cases/GetByIdTransactionUseCase";
import { UpdateTransactionUseCase } from "./domain/use-cases/UpdateTransactionUseCase";

const repository = new InMemoryRepository();

export const dependencies = {
    createTransactionUseCase: new CreateTransactionUseCase(repository),
    deleteTransactionUseCase: new DeleteTransactionUseCase(repository),
    getAllTransactionsUseCase: new GetAllTransactionsUseCase(repository),
    getByIdTransactionUseCase: new GetByIdTransactionUseCase(repository),
    updateTransactionUseCase: new UpdateTransactionUseCase(repository),
}




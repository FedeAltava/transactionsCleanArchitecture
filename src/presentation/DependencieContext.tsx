
import ReactDOM from "react-dom/client";
import { createContext } from 'react';
import { StrictMode } from "react";
import { dependencies } from "../main";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

export const DependenciesContext = createContext(dependencies);

ReactDOM.createRoot(document.getElementById('root')!).render(

    <StrictMode>
        <DependenciesContext value={dependencies}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </DependenciesContext>
    </StrictMode>
);
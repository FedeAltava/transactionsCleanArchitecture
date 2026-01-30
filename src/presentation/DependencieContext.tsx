
import ReactDOM from "react-dom/client";
import { createContext } from 'react';
import { StrictMode } from "react";
import {dependencies} from "../main";
import { App } from "./App";

export const DependenciesContext = createContext(dependencies);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(

    <StrictMode>
        <DependenciesContext value={dependencies}>
            <App />
        </DependenciesContext>
    </StrictMode>
);
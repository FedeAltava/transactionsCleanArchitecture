import { useContext } from "react";
import { DependenciesContext } from "../DependencieContext";


export const useDependencies = () => {
    const context = useContext(DependenciesContext);
    if (!context) {
        throw new Error("useDependencies must be used within a DependenciesProvider");
    }
    return context;
};
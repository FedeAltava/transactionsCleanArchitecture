
import { useContext } from "react";
import { DependenciesContext } from "../presentation/DependencieContext";

export const App = () => {
    const deps = useContext(DependenciesContext);
    console.log("Casos de uso disponibles:", deps);
    return (
        <div>
            <h1>Personal Finance Lite</h1>
            <p>Arquitectura conectada con éxito.</p>
        </div>
    ); 
};
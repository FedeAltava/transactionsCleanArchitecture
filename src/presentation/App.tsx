import { Route, Routes } from "react-router";
import { ListTransactions } from "./components/listTransactions/listTransactions";
import { AddTransaction } from "./components/addTransaction/addTransaction";
import './global.css';
export const App = () => {

    return (
        <div className="App">
            <Routes>
               <Route path="/" element ={<ListTransactions />}/> 
               <Route path = "/addTransaction" element ={<AddTransaction />}/>
            </Routes>
        </div>
    )
};
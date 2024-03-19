import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRobot } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

import Stock from "../Models/Stock"
import useFetch from "../Hooks/useFetch"
import StockMenu from "./StockMenu"
import UserMessage from "../UserMessage/UserMessage"
import InternalError from "./InternalError"

import "./botMessage.css"


const HomeMenu = ({ optionSelection, setOptionSelection, inputValue }: any) => {

    const { data: stockExchange, error } = useFetch('http://localhost:8000/stocks');
    const [isSelected, setIsSelected] = useState(false);
    const [selectionName, setSelectionName] = useState("");
    const [internalError, setInternalError] = useState("");

    const handleOption = (selectedStock: Stock) => {
        setOptionSelection(selectedStock);
        setIsSelected(true);
        setSelectionName(selectedStock.stockExchange);
        setInternalError("");
        console.log(selectedStock);
    };

    const checkInputValue = () => {
        if(inputValue !== "" && inputValue){
            const matchedStock = stockExchange.find(stock => stock.stockExchange.toLowerCase() === inputValue.toLowerCase());
            if(matchedStock){
                handleOption(matchedStock);
            } else if(inputValue.toLowerCase() !== "back"){
                setInternalError("No stock found! Please select another one.")
            }
        } 
    };

    useEffect(() => {
        checkInputValue();
    }, [inputValue]);


    return (
        <div>
            <div className="messageContainer">
                <FontAwesomeIcon icon={faRobot} className="robotIcon" />
                <div className="botMessageText">
                    {error && <div className="errorMessage">{error}</div>}
                    {!error && <p>Hello! Please select a Stock Exchange.</p>}
                    <div className="messageOptions">
                        {stockExchange.map((stock, i) => (
                            <button key={i} onClick={() => handleOption(stock)}>{stock.stockExchange}</button>
                        ))}
                    </div>
                </div>
            </div>
            {internalError && <InternalError errorMessage={internalError}/>}
            {isSelected && <UserMessage selectionName={selectionName} />}
            {isSelected && <StockMenu optionSelection={optionSelection} setOptionSelection={setOptionSelection} inputValue={inputValue}/>}
        </div>
    );
};

export default HomeMenu;
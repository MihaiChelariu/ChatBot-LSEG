import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import useFetch from "../Hooks/useFetch";
import HomeMenu from "./HomeMenu";
import UserMessage from "../UserMessage/UserMessage";
import PriceDisplay from "./PriceDisplay";
import InternalError from "./InternalError";

import "./botMessage.css";

const StockMenu = ({ optionSelection, setOptionSelection, inputValue}: any) => {
    const [stockOptions, setStockOptions] = useState<{ code: string; stockName: string; price: number }[]>([]);
    const { data, error } = useFetch('http://localhost:8000/stocks');
    const [goBack, setGoBack] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [selection, setSelection] = useState<any>();
    const [internalError, setInternalError] = useState("");

    useEffect(() => {
        if (optionSelection?.code && data) {
            const selectedStock = data.find(stock => stock.code === optionSelection.code);
            if (selectedStock) {
                setStockOptions(selectedStock.topStocks);
                setInternalError("");
            }
        }
    }, [optionSelection, data]);

    const checkInputValue = () => {
        if(inputValue !== ""){
            const matchedStock = stockOptions.find(stock => stock.stockName.toLowerCase() === inputValue.toLowerCase());
            if(matchedStock){
                handleSelection(matchedStock);
            } else if(inputValue.toLowerCase() === "back"){
                handleBack();
            } else {
                setInternalError("No stock found! Please select another one.")
            }
        } 
    };

    useEffect(() => {
        checkInputValue();
    }, [inputValue]);

    const handleBack = () => {
        setGoBack(true);
        setInternalError("");
    }

    const handleSelection = (stock: any) => {
        setIsSelected(true);
        setSelection(stock);
        setInternalError("");
    }
    
    return (
        <div>
            <div className="messageContainer">
                <FontAwesomeIcon icon={faRobot} className="robotIcon" />
                <div className="botMessageText">
                    {error && <div className="errorMessage">{error}</div>}
                    {!error && <p>Please select a stock.</p>}
                    <div className="messageOptions">
                        {stockOptions.map((stock, i) => (
                            <button key={i} onClick={() => handleSelection(stock)}>{stock.stockName}</button>
                        ))}
                        <button className="backButton" onClick={handleBack}>Back</button>
                    </div>
                </div>
            </div>
            {internalError && <InternalError errorMessage={internalError}/>}
            {goBack && <div><UserMessage selectionName="Back" />
                <HomeMenu optionSelection={optionSelection} setOptionSelection={setOptionSelection} inputValue={inputValue}/></div>
            }
            {isSelected && <UserMessage selectionName={selection.stockName} />}
            {isSelected && <PriceDisplay selection={selection} optionSelection={optionSelection} setOptionSelection={setOptionSelection} inputValue={inputValue}/>}
        </div>
    );
};

export default StockMenu;
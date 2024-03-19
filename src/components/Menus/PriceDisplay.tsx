import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import HomeMenu from "./HomeMenu";
import StockMenu from "./StockMenu";
import UserMessage from "../UserMessage/UserMessage";
import InternalError from "./InternalError";

import "./botMessage.css"

const PriceDisplay = ({ selection, optionSelection, setOptionSelection, inputValue }: any) => {
    const [back, setBack] = useState(false);
    const [home, setHome] = useState(false);
    const [internalError, setInternalError] = useState("");

    const checkInputValue = () => {
        if(inputValue !== ""){
            if(inputValue.toLowerCase() === "back"){
                handleBack();
            } else if (inputValue.toLowerCase() === "home menu"){
                handleHome();
            } else {
                setInternalError("Option not found! Please select another one.")
            }
        }
    };

    useEffect(() => {
        checkInputValue();
    }, [inputValue]);

    const handleBack = () =>{
        setBack(true);
        setInternalError("");
    }

    const handleHome = () =>{
        setHome(true);
        setInternalError("");
    }

    return (
        <div>
            <FontAwesomeIcon icon={faRobot} className="robotIcon" />
            <div className="botMessageText">
                <p>Stock Price of {selection.stockName} is {selection.price}</p>
                <div className="messageOptions">
                    <button onClick={handleBack}>Back</button>
                    <button onClick={handleHome}>Home Menu</button>
                </div>
            </div>
            {internalError && <InternalError errorMessage={internalError}/>}
            {back && <div>
                <UserMessage selectionName="Back" />
                <StockMenu optionSelection={optionSelection} setOptionSelection={setOptionSelection} inputValue={inputValue}/>
            </div>}
            {home && <div>
                <UserMessage selectionName="Home Menu" />
                <HomeMenu optionSelection={optionSelection} setOptionSelection={setOptionSelection} inputValue={inputValue}/>
            </div>}
        </div>
    );
};

export default PriceDisplay;
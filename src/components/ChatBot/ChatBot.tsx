import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import HomeMenu from "../Menus/HomeMenu";
import Stock from "../Models/Stock";

import "./ChatBot.css"

const ChatBot = () => {
  const [optionSelection, setOptionSelection] = useState<Stock>();
  const [inputValue, setInputValue] = useState("");
  const [inputChange, setInputChange] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputChange(event.target.value);
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClick();
    }
  }

  const handleClick = () => {
      setInputValue(inputChange);
      setInputChange("");
  }

  return (
    <div className="chatContainer">
      <div className="chatHeader">
        <div className="chatHeaderItem">
          <FontAwesomeIcon icon={faRobot} />
          <label>LSEG ChatBot</label>
        </div>
      </div>
      <div className="messagesContainer">
        <div className="botMessage">
          <HomeMenu optionSelection={optionSelection} setOptionSelection={setOptionSelection} inputValue={inputValue} />
        </div>
      </div>
      <div className="footerContainer">
        <input
          placeholder="Please pick an option"
          value={inputChange}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress} />
        <button onClick={handleClick} ><FontAwesomeIcon icon={faPaperPlane} className="planeIcon" /></button>
      </div>
    </div>
  );
};

export default ChatBot;
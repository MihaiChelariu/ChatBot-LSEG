import { useState } from "react";
import ChatBot from "../ChatBot/ChatBot";

import "./Title.css"

const Title = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="homePage">
            <div className="titleContainer">
                <h1>Welcome to my chat bot app</h1>
                <div className="openButton">
                    <button onClick={() => setClicked(!clicked)}>{clicked ? 'Close Chat' : 'Open New Chat'}</button>
                </div>
            </div>
            <div className="chatCointainer">
                {clicked && <ChatBot />}
            </div>
        </div>
    );
};

export default Title;
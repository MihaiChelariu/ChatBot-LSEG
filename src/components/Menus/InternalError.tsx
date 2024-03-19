import "./botMessage.css"

const InternalError = ({errorMessage}: any) =>{
    return(
        <div className="botMessageText">
                <div className="errorMessage">{errorMessage}</div>
        </div>
    );
};

export default InternalError;
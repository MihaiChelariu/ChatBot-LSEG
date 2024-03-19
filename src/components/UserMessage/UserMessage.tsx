import "./UserMessage.css"

interface Props{
    selectionName: string;
}

const UserMessage: React.FC<Props> = ({selectionName}) =>{
    return(
        <div className="userMessage">
          <p className="userMessageText">{selectionName}</p>
        </div>
    );
};  

export default UserMessage;
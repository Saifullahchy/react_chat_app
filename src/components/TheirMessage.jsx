const TheirMessage = ({lastmessage, message}) => {
    const isFirstMessageByUser = !lastmessage || lastmessage.sender.username;
    
    return(
    <div className="message-row">
        {isFirstMessageByUser &&(
            <div 
                className= "message-avatar"
                style={{backgroundImage: `url(${message?.sender?.avatar})`}}
            />
        )}

      {message?.attachments?.length >0
            ? ( 
            <img
                src={message.attachments[0].file}
                alt= "message-attachment"
                className="message-image"
                style={{marginLeft: isFirstMessageByUser?'4px':'48px'}}
            />
            ) : (
                <div className="message" style={{float:'left', backgroundColor:'#CABCDC '}}>
                    {message.text}
                </div>
            )
        }
    
        TheirMessage
    </div>
    );
}

export default TheirMessage;
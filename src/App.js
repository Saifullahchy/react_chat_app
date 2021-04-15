import React from 'react';
import { ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return(
        <ChatEngine
            height = "100vh"
            projectID = "0ab0c493-637c-4308-b557-4b6cbb5b2e79"
            userName = "saifullahChowdhury"
            userSecret = "1234"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}

        />
    );
}


export default App;



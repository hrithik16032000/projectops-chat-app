import { ChatEngine } from "react-chat-engine";

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import "./App.css";

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
    <ChatEngine 
    height="100vh" 
    projectID="44e4f012-88ef-4f38-bd30-8c11439941b5" 
    userName= {localStorage.getItem('username')} 
    userSecret= {localStorage.getItem('password')}
    renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
    );
};

export default App;


import React from 'react';
import FriendList from './Friendlist';
import Chat from './Chat';
import './Chat.css';  
import './ChatPage.css';
import { useNavigate } from 'react-router-dom';


const ChatPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session or authentication tokens
        localStorage.removeItem('authToken'); // Example of removing an auth token
        sessionStorage.clear(); // Clear sessionStorage (if you use it)

        navigate('/login'); 
    };

    return (
        <div>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            <FriendList />
            <Chat />
        </div>
    );
};

export default ChatPage;

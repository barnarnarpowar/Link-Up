import React, { useState } from 'react';
import './Chat.css';

const friends = ['Alice', 'Bob', 'Charlie'];

const Chat = () => {
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [messages, setMessages] = useState({});
    const [input, setInput] = useState('');

    const selectFriend = (friend) => {
        setSelectedFriend(friend);
        if (!messages[friend]) {
            setMessages((prevMessages) => ({
                ...prevMessages,
                [friend]: [],
            }));
        }
    };

    const sendMessage = () => {
        if (input.trim() && selectedFriend) {
            setMessages((prevMessages) => ({
                ...prevMessages,
                [selectedFriend]: [...prevMessages[selectedFriend], { text: input, fromMe: true }],
            }));
            setInput('');
        }
    };

    return (
        <div className="chat-container">
            <div className="friend-list">
                <h2>Friends</h2>
                <ul>
                    {friends.map((friend) => (
                        <li key={friend} onClick={() => selectFriend(friend)} className={selectedFriend === friend ? 'active' : ''}>
                            {friend}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="chat-box">
                {selectedFriend ? (
                    <>
                        <div className="chat-header">{selectedFriend}</div>
                        <div className="chat-messages">
                            {messages[selectedFriend]?.map((message, index) => (
                                <div
                                    key={index}
                                    className={`chat-message ${message.fromMe ? 'from-me' : 'from-friend'}`}
                                >
                                    {message.text}
                                </div>
                            ))}
                        </div>
                        <div className="chat-input">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                            />
                            <button onClick={sendMessage}>Send</button>
                        </div>
                    </>
                ) : (
                    <div className="chat-placeholder">Select a friend to start chatting</div>
                )}
            </div>
        </div>
    );
};

export default Chat;

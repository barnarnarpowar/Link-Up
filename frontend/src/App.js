import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './Signup';
import FriendList from './Friendlist';
import ChatPage from './ChatPage';

const App = () => {
  return (
    <Router>
      <div>
        {/* <h1>Link Up</h1> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/friends" element={<FriendList />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

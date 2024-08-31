import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="login-container">
             <h1 className="title">Link Up</h1>
            <div className="login-box">
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
                <Link to="/signup" className="signup-link">Create an Account</Link>
            </div>
        </div>
    );
};

export default Login;

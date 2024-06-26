import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Navbar from '../components/Navbar';

import './generalStyle.css'; 

function LoginPage() {
    const { setUser } = useUser();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:9000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const user = await response.json();
                setUser(user); // Update global user state
                alert('Login successful!');
                navigate('/'); // Redirects to the home page
            } else {
                alert('Failed to login. Please check your credentials.');
            }
        } catch (error) {
            console.error('Failed to login:', error);
            alert('Failed to login. Please try again later.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="form">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input className="input" name="username" type="text" placeholder="Username" onChange={handleChange} required />
                        <input className="input" name="password" type="password" placeholder="Password" onChange={handleChange} required />
                        <button className="button" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage;

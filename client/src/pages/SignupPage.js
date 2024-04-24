import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Navbar from '../components/Navbar';
import "./generalStyle.css";

function SignupPage() {
    const { setUser } = useUser();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:9000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const user = await response.json(); // Assuming your server responds with the user's data
                setUser(user); // Update global user state
                alert('Account created successfully! You are now logged in.');
                navigate('/'); // Redirects to the home page
            } else {
                alert('Failed to create an account. Please try again.');
            }
        } catch (error) {
            console.error('Failed to create account:\n', error);
            alert('Failed to create an account. Please try again later.\n', error);
        }
    };

    return (
        <>
        <Navbar />
        <div className="container"> 
            <div className="form"> 
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <input className="input" name="firstName" type="text" placeholder="First Name" onChange={handleChange} required />
                    <input className="input" name="lastName" type="text" placeholder="Last Name" onChange={handleChange} required />
                    <input className="input" name="username" type="text" placeholder="Username" onChange={handleChange} required />
                    <input className="input" name="password" type="password" placeholder="Password" onChange={handleChange} required />
                    <button className="button" type="submit">Signup</button> {/* Use the button class */}
                </form>
            </div>
        </div>
        </>
    );
}

export default SignupPage;

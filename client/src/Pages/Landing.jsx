import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

export const Landing = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <div id="banner">
            <button id="btn" onClick={handleClick}>
                Get started
            </button>
        </div>
    );
};

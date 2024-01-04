import React from 'react';
import img1 from "../assets/img/Logo.png";
import './logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <img src={img1} href="/" alt="imagen logo ofimueble" />
        </div>
    )
}

export default Logo;
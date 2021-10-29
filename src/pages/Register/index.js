import React from 'react';
import { RegisterBg } from '../../assets/image';
import './register.scss';
import { Input } from '../../components/atoms';



const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="imageBg"/>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name"/>
                <Input label="Email" placeholder="Email" />
                <Input label="Password" placeholder="Password"/>
            </div>
            
        </div>
        
    )
}

export default Register

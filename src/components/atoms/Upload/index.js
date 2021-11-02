import React from 'react'
import { LoginBg } from '../../../assets/image'
import './upload.scss'

function Upload () {
    return (
        <div className="upload">
            <img src={LoginBg} alt="preview" />
            <input type="file" />
        </div>
    )
}

export default Upload 

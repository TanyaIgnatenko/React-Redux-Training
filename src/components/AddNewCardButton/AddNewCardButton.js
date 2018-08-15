import React from 'react';
import './AddNewCardButton.css';

export default function AddNewCardButton(props) {
    const image = require('../../assets/images/plus-icon.png');
    return (
        <div className='add-new-card-button__container'>
            <input type='image' src={image} onClick={() => {}}/>
        </div>
    );
}


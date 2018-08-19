import React from 'react';
import './AddNewCardButton.css';
import {Link} from 'react-router-dom';

export default function AddNewCardButton(props) {
    const image = require('../../assets/images/plus-icon.png');
    return (
        <div className='add-new-card-button__container'>
            <Link to='/create'><input type='image' src={image}/></Link>
        </div>
    );
}


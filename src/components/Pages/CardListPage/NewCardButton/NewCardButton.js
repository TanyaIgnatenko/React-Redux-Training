import React from 'react';
import './NewCardButton.css';
import {Link} from 'react-router-dom';
import Routes from '../../../../routes';

export default function NewCardButton(props) {
    const image = require('../../assets/images/plus-icon.png');
    return (
        <div className='new-card-button__container'>
            <Link to={Routes.CREATE_CARD}>
                <input type='image' src={image}/>
            </Link>
        </div>
    );
}


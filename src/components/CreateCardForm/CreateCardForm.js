import React from 'react';
import './CreateCardForm.css';

export default function CreateCardForm(props) {
    return (
        <form className='createCardForm__container'>
            <input type='text' className='titleField' placeholder='Enter title'/>
            <input type='text' className='descriptionField' placeholder='Enter description'/>
            <input type='submit' className='saveButton' value='Save'/>
        </form>
    );
}

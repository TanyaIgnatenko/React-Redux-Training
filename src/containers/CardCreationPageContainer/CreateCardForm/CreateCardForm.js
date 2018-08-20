import React from 'react';
import './CreateCardForm.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class CreateCardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className='createCardForm__container'>

                <input
                    type='text'
                    className='titleField'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleInputChange}
                />

                <input
                    type='text'
                    className='descriptionField'
                    placeholder='Enter description'
                    value={this.state.description}
                    onChange={this.handleInputChange}
                />

                <Link to='/'><input type='button' className='saveButton' value='Save'/></Link>

            </div>
        );
    }
}

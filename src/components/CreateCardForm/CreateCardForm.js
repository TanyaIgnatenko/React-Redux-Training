import React from 'react';
import './CreateCardForm.css';
import PropTypes from 'prop-types';

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
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <form className='createCardForm__container' onSubmit={this.props.handleSubmit}>

                <input
                    type='text'
                    className='titleField'
                    placeholder='Enter title'
                    value={this.setState(this.state.title)}
                    onChange={this.handleInputChange}
                />

                <input
                    type='text'
                    className='descriptionField'
                    placeholder='Enter description'
                    value={this.setState(this.state.description)}
                    onChange={this.handleInputChange}
                />

                <input type='submit' className='saveButton' value='Save'/>

            </form>
        );
    }
}

CreateCardForm.propTypes = {
    handleSubmit: PropTypes.func
};

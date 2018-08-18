import React from 'react';
import CreateCardForm from '../../components/CreateCardForm/CreateCardForm';
import PropTypes from 'prop-types';

export default class CreateCardFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.saveCardHandler = this.saveCardHandler.bind(this);
    }

    saveCardHandler() {
        this.props.history.pop();
    }

    render() {
        return <CreateCardForm handleSubmit={this.saveCardHandler}/>;
    }
}

CreateCardFormContainer.propTypes = {
    history: PropTypes.object
};


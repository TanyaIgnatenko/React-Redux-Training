import React from 'react';
import CreateCardForm from '../../components/Pages/CreateCardPage/CreateCardForm/CreateCardForm';
import PropTypes from 'prop-types';

export default class CreateCardFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.saveCardHandler = this.saveCardHandler.bind(this);
    }

    render() {
        return <CreateCardForm/>;
    }
}

CreateCardFormContainer.propTypes = {
    history: PropTypes.object
};


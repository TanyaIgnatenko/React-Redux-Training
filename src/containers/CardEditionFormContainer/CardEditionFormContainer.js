import React from 'react';
import PropTypes from 'prop-types';
import CardEditionForm from '../../components/CardEditionForm/CardEditionForm';
import * as localHistoryStorageController from '../../localHistoryStorageController';

export default class CardEditionFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.saveCardHandler = this.saveCardHandler.bind(this);
    }

    componentDidMount() {
        if (this.props.id !== null) {
            this.card = localHistoryStorageController.fetchCard(this.props.id);
        }
    }

    render() {
        return (
            <CardEditionForm
                id={this.props.id}
                title={this.card.title}
                description={this.card.description}
            />
        );
    }
}

CardEditionFormContainer.defaultProps = {
    id: null
};

CardEditionFormContainer.propTypes = {
    id: PropTypes.number,
    history: PropTypes.object
};


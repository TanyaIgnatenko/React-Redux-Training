/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import PropTypes from 'prop-types';
import CardEditionForm from '../../components/CardEditionForm/CardEditionForm';
import * as localHistoryStorageController from '../../CardStorageController';

export default class CardEditionFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDataSave = this.handleDataSave.bind(this);
        this.handleCardDeletion = this.handleCardDeletion.bind(this);

        this.state = {
            title: '',
            description: ''
        };
    }

    handleInputChange(event) {
        this.setState = {
            [event.target.name]: event.target.value
        };
    }

    handleDataSave(event) {
        const card = {
            title: this.state.title,
            description: this.state.description
        };

        if (this.cardExist) {
            card.isLiked = this.card.isLiked;
            localHistoryStorageController.replaceCard(this.props.id, card);
        } else {
            card.isLiked = false;
            localHistoryStorageController.addCard(card);
        }
    }

    handleCardDeletion(event) {
        localHistoryStorageController.removeCard(this.props.id);
    }

    componentDidMount() {
        if (this.props.id !== null) {
            this.cardExist = true;
            this.card = localHistoryStorageController.fetchCard(this.props.id);
            this.setState({
                title: this.card.title,
                description: this.card.description
            });
        }
        this.cardExist = false;
    }

    render() {
        return (
            <CardEditionForm
                cardExist={this.cardExist}
                title={this.state.title}
                description={this.state.description}
                onSave={this.handleDataSave}
                onDelete={this.handleCardDeletion}
                onTitleInputChange={this.handleInputChange}
                onDescriptionInputChange={this.handleInputChange}
            />
        );
    }
}

CardEditionFormContainer.defaultProps = {
    id: null
};

CardEditionFormContainer.propTypes = {
    id: PropTypes.number,
    history: PropTypes.object.isRequired
};


/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import PropTypes from 'prop-types';

import CardEditionForm from '../../components/CardEditionForm/CardEditionForm';
import * as CardsStorageController from '../../utils/CardStorageController';
import Routes from '../../config';

export default class CardEditionFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        };
    }

    getChangedCard() {
        let card;
        if (this.props.cardExist) {
            card = {
                id: this.previousCard.id,
                title: this.state.title,
                description: this.state.description,
                isLiked: this.previousCard.isLiked
            };
        } else {
            card = {
                id: null,
                title: this.state.title,
                description: this.state.description,
                isLiked: false
            };
        }
        return card;
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSaveClick = (event) => {
        event.preventDefault();

        const changedCard = this.getChangedCard();
        if (this.props.cardExist) {
            CardsStorageController.replaceCard(changedCard.id, changedCard);
        } else {
            CardsStorageController.addCard(changedCard);
        }
        CardsStorageController.deleteTempCard(changedCard.id);
        this.props.history.push(Routes.CARD_LIST);
    };

    handleCardDeletion = () => CardsStorageController.removeCard(this.props.id);

    handlePageReload = () => {
        const changedCard = this.getChangedCard();
        CardsStorageController.addTempCard(changedCard);
    };

    componentDidMount() {
        if (this.props.cardExist) {
            this.previousCard = CardsStorageController.fetchCard(this.props.id);
        }
        const tempCard = CardsStorageController.fetchTempCard(this.props.id);
        if (tempCard !== undefined) {
            this.setState({
                title: tempCard.title,
                description: tempCard.description
            });
        } else if (this.props.cardExist) {
            this.setState({
                title: this.previousCard.title,
                description: this.previousCard.description
            });
        }

        window.addEventListener('beforeunload', this.handlePageReload);
    }

    render() {
        return (
            <CardEditionForm
                cardExist={this.props.cardExist}
                title={this.state.title}
                description={this.state.description}
                onSave={this.handleSaveClick}
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
    cardExist: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
};


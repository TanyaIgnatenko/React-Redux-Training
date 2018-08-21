/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import PropTypes from 'prop-types';
import CardEditionForm from '../../components/CardEditionForm/CardEditionForm';
import * as CardsStorageController from '../../CardStorageController';
import Routes from '../../routes';
import isEqual from '../../utils/CardComparator';

export default class CardEditionFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
    }

    handlePageReload = () => {
        const card = this.getCurrentCardByState();
        CardsStorageController.saveTempCard(card);
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSaveClick = (event) => {
        event.preventDefault();

        const card = this.getCurrentCardByState();
        if (this.props.cardExist && !isEqual(card, this.card)) {
            CardsStorageController.replaceCard(card.id, card);
        } else {
            CardsStorageController.addCard(card);
        }
        CardsStorageController.deleteTempCard();
        this.props.history.push(Routes.CARD_LIST);
    };

    handleCardDeletion = () => CardsStorageController.removeCard(this.props.id);

    getCurrentCardByState() {
        const card = {
            id: this.card.id,
            title: this.state.title,
            description: this.state.description,
            isLiked: this.card.isLiked
        };
    }

    componentDidMount() {
        this.card = CardsStorageController.getTempCard(this.props.id);
        if (this.card === null) {
            if (this.props.cardExist) {
                this.card = CardsStorageController.fetchCard(this.props.id);
                this.setState({
                    title: this.card.title,
                    description: this.card.description
                });
            } else {
                this.card = {isLiked: false};
            }
        }
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

CardEditionFormContainer.propTypes = {
    id: PropTypes.number,
    cardExist: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
};


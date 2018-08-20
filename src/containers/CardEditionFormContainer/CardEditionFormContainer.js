/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import PropTypes from 'prop-types';
import CardEditionForm from '../../components/CardEditionForm/CardEditionForm';
import * as CardsStorageController from '../../CardStorageController';
import Routes from '../../routes';

export default class CardEditionFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSaveClick = (event) => {
        event.preventDefault();

        const card = {
            title: this.state.title,
            description: this.state.description
        };
        if (this.props.cardExist) {
            card.isLiked = this.card.isLiked;
            CardsStorageController.replaceCard(this.props.id, card);
        } else {
            card.isLiked = false;
            CardsStorageController.addCard(card);
        }

        this.props.history.push(Routes.CARD_LIST);
    };

    handleCardDeletion = () => CardsStorageController.removeCard(this.props.id);

    componentDidMount() {
        if (this.props.cardExist) {
            this.card = CardsStorageController.fetchCard(this.props.id);
            this.setState({
                title: this.card.title,
                description: this.card.description
            });
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


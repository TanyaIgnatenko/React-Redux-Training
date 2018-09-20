/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {Routes} from '../../config';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CardEditionForm from '../../components/CardEditionForm/CardEditionForm';
import {addCardRequest, editCardRequest, removeCardRequest} from '../../ducks/cards/actions';


class CardEditionFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        };
    }

    componentDidMount() {
        // if (this.props.cardExist) {
        //     this.props.previousCard = fetchCard(this.props.id);
        // }
        // const tempCard = fetchTempCard(this.props.id);
        const tempCard = undefined;
        if (tempCard !== undefined) {
            this.setState({
                title: tempCard.title,
                content: tempCard.content
            });
        } else if (this.props.cardExist) {
            this.setState({
                title: this.props.previousCard.title,
                content: this.props.previousCard.content
            });
        }

        window.addEventListener('beforeunload', this.handlePageReload);
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
            this.props.replaceCard(changedCard.id, changedCard);
        } else {
            this.props.addCard(changedCard);
        }
        //CardsStorageController.deleteTempCard(changedCard.id);
        this.props.history.push(Routes.CARD_LIST);
    };

    handleCardDeletion = () => {
        this.props.removeCard(this.props.id);
        this.props.history.push(Routes.CARD_LIST);
    };

    handlePageReload = () => {
        const changedCard = this.getChangedCard();
        //CardsStorageController.addTempCard(changedCard);
    };

    getChangedCard() {
        let card;
        if (this.props.cardExist) {
            card = {
                id: this.props.previousCard.id,
                title: this.state.title,
                content: this.state.content,
                totalLikes: this.props.previousCard.totalLikes
            };
        } else {
            card = {
                id: null,
                title: this.state.title,
                content: this.state.content,
                totalLikes: 0
            };
        }
        return card;
    }

    render() {
        return (
            <CardEditionForm
                cardExist={this.props.cardExist}
                title={this.state.title}
                content={this.state.content}
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
    previousCard: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }),
    cardExist: PropTypes.bool.isRequired,
    addCard: PropTypes.func.isRequired,
    replaceCard: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownPorps) => ({
    previousCard: state.cards.cards.find(card => card.id === ownPorps.id)
});

const mapDispatchToProps = dispatch => ({
    addCard: card => dispatch(addCardRequest(card)),
    replaceCard: (id, card) => dispatch(editCardRequest(id, card)),
    removeCard: id => dispatch(removeCardRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardEditionFormContainer);


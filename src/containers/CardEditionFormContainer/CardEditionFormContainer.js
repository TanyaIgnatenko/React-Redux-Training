/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import PropTypes from 'prop-types';

import CardEditionForm from '../../components/CardEditionForm/CardEditionForm';
import {Routes} from '../../config';
import {addCard, editCard, removeCard} from '../../ducks/cards/actions';
import {connect} from 'react-redux';

class CardEditionFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        };
    }

    componentDidMount() {
        // if (this.props.cardExist) {
        //     this.previousCard = fetchCard(this.props.id);
        // }
        // const tempCard = fetchTempCard(this.props.id);
        const tempCard = undefined;
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
                id: this.previousCard.id,
                title: this.state.title,
                description: this.state.description,
                likeCount: this.previousCard.likeCount
            };
        } else {
            card = {
                id: null,
                title: this.state.title,
                description: this.state.description,
                likeCount: 0
            };
        }
        return card;
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
    previousCard: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }),
    cardExist: PropTypes.bool.isRequired,
    addCard: PropTypes.func.isRequired,
    replaceCard: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownPorps) => ({
    previousCard: state.cards[ownPorps.id]
});

const mapDispatchToProps = dispatch => ({
    addCard: card => dispatch(addCard(card)),
    replaceCard: (id, card) => dispatch(editCard(id, card)),
    removeCard: id => dispatch(removeCard(id))
});

export default connect(null, mapDispatchToProps)(CardEditionFormContainer);


import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/Card/Card';
import * as CardStorageController from '../../CardStorageController';
import Routes from '../../routes';

export default class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: this.props.card.isLiked
        };
    }

    toggleLikeHandler = () => {
        this.setState({isLiked: !this.state.isLiked});
    };

    editClickHandler = () => this.props.history.push(Routes.EDIT_CARD.replace(':id', this.props.card.id));

    componentWillUnmount() {
        if (this.props.card.isLiked !== this.state.isLiked) {
            const card = this.props.card;
            card.isLiked = this.state.isLiked;
            CardStorageController.replaceCard(card.id, card);
        }
    }

    render() {
        return (
            <Card
                title={this.props.card.title}
                description={this.props.card.description}
                isLiked={this.state.isLiked}
                onLikeClick={this.toggleLikeHandler}
                onEditClick={this.editClickHandler}
            />
        );
    }
}

CardContainer.propTypes = {
    card: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

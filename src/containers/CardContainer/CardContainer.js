import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/Card/Card';
import {Routes} from '../../config';
import CardStorageController from '../../utils/CardStorageController';

export default class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalLikes: this.props.card.totalLikes
        };
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.saveLikeState);
    }

    componentWillUnmount() {
        this.saveLikeState();
    }

    likeHandler = () => {
        this.setState(prevState => ({
            totalLikes: ++prevState.totalLikes
        }));
    };

    editClickHandler = () => this.props.history.push(Routes.EDIT_CARD.replace(':id', this.props.card.id));

    saveLikeState = () => {
        if (this.props.card.totalLikes !== this.state.totalLikes) {
            const card = this.props.card;
            card.totalLikes = this.state.totalLikes;
            // CardStorageController.replaceCard(card.id, card);
        }
    };

    render() {
        return (
            <Card
                title={this.props.card.title}
                content={this.props.card.content}
                likeCount={this.state.totalLikes}
                onLikeClick={this.likeHandler}
                onEditClick={this.editClickHandler}
            />
        );
    }
}


CardContainer.propTypes = {
    card: PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            totalLikes: PropTypes.number.isRequired
        }).isRequired,
    history: PropTypes.object.isRequired
};

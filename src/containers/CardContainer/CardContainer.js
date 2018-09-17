import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/Card/Card';
import Routes from '../../config';
import CardStorageController from '../../utils/CardStorageController';

export default class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount: this.props.card.likeCount
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
            likeCount: ++prevState.likeCount
        }));
    };

    editClickHandler = () => this.props.history.push(Routes.EDIT_CARD.replace(':id', this.props.card.id));

    saveLikeState = () => {
        if (this.props.card.likeCount !== this.state.likeCount) {
            const card = this.props.card;
            card.likeCount = this.state.likeCount;
            CardStorageController.replaceCard(card.id, card);
        }
    };

    render() {
        return (
            <Card
                title={this.props.card.title}
                description={this.props.card.description}
                likeCount={this.state.likeCount}
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
            description: PropTypes.string.isRequired,
            likeCount: PropTypes.number.isRequired
        }).isRequired,
    history: PropTypes.object.isRequired
};

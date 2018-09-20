import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/Card/Card';
import {Routes} from '../../config';
import {toggleLikeRequest} from '../../ducks/cards/actions';
import {connect} from 'react-redux';

class CardContainer extends React.Component {
    static propTypes = {
        card: PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                totalLikes: PropTypes.number.isRequired
            }).isRequired,
        history: PropTypes.object.isRequired,
        toggleLike: PropTypes.func.isRequired
    };

    editClickHandler = () => this.props.history.push(Routes.EDIT_CARD.replace(':id', this.props.card.id));

    render() {
        console.log('this.props.card.totalLikes: ', this.props.card.totalLikes);
        return (
            <Card
                title={this.props.card.title}
                content={this.props.card.content}
                likeCount={this.props.card.totalLikes}
                onLikeClick={this.props.toggleLike}
                onEditClick={this.editClickHandler}
            />
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleLike: () => dispatch(toggleLikeRequest(ownProps.card.id))
});

export default connect(null, mapDispatchToProps)(CardContainer);



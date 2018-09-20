import React from 'react';
import PropTypes from 'prop-types';

import Post from '../../components/Post/Post';
import {Routes} from '../../config';
import {toggleLikeRequest} from '../../ducks/posts/actions';
import {connect} from 'react-redux';

class PostContainer extends React.Component {
    static propTypes = {
        post: PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                totalLikes: PropTypes.number.isRequired
            }).isRequired,
        history: PropTypes.object.isRequired,
        toggleLike: PropTypes.func.isRequired
    };

    editClickHandler = () => this.props.history.push(Routes.EDIT_POST.replace(':id', this.props.post.id));

    render() {
        return (
            <Post
                title={this.props.post.title}
                content={this.props.post.content}
                likeCount={this.props.post.totalLikes}
                onLikeClick={this.props.toggleLike}
                onEditClick={this.editClickHandler}
            />
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleLike: () => dispatch(toggleLikeRequest(ownProps.post.id))
});

export default connect(null, mapDispatchToProps)(PostContainer);



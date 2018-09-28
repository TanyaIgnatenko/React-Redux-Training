import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Routes} from '../../config';
import {toggleLikeRequest} from '../../ducks/posts/actions';
import {selectIsAdmin} from '../../ducks/auth/selectors';
import Post from '../../components/posts/Post/Post';

class PostContainer extends React.Component {
    static propTypes = {
        post: PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                liked: PropTypes.bool.isRequired,
                totalLikes: PropTypes.number.isRequired
            }).isRequired,
        toggleLike: PropTypes.func.isRequired,
        isAdmin: PropTypes.bool.isRequired,
        editClickHandler: PropTypes.func.isRequired
    };

    render() {
        const {post, toggleLike, isAdmin, editClickHandler} = this.props;
        return (
            <Post
                title={post.title}
                content={post.content}
                liked={post.liked}
                likeCount={post.totalLikes}
                isEditable={isAdmin}
                onLikeClick={toggleLike}
                onEditClick={editClickHandler}
            />
        );
    }
}

const mapStateToProps = state => ({
    canAddPosts: selectIsAdmin(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleLike: () => dispatch(toggleLikeRequest(ownProps.post.id)),
    editClickHandler: () => dispatch(push(Routes.EDIT_POST.replace(':id', ownProps.post.id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);



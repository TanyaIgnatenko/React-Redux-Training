import React from 'react';
import PropTypes from 'prop-types';

import Post from '../../../components/posts/Post/Post/Post';
import {Routes} from '../../../config';
import {toggleLikeRequest} from '../../../ducks/posts/actions';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {selectIsAdmin} from '../../../ducks/auth/selectors';

class PostContainer extends React.Component {
    static propTypes = {
        post: PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                totalLikes: PropTypes.number.isRequired
            }).isRequired,
        toggleLike: PropTypes.func.isRequired,
        isEditable: PropTypes.bool.isRequired,
        editClickHandler: PropTypes.func.isRequired
    };

    render() {
        const {post, toggleLike, isEditable, editClickHandler} = this.props;
        return (
            <Post
                title={post.title}
                content={post.content}
                likeCount={post.totalLikes}
                isEditable={isEditable}
                onLikeClick={toggleLike}
                onEditClick={editClickHandler}
            />
        );
    }
}

const mapStateToProps = state => ({
    isAdmin: selectIsAdmin(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleLike: () => dispatch(toggleLikeRequest(ownProps.post.id)),
    editClickHandler: () => dispatch(push(Routes.EDIT_POST.replace(':id', ownProps.post.id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);



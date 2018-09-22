/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import EditPostForm from '../../components/EditPostForm/PostEditionForm';
import {editPostRequest, removePostRequest} from '../../ducks/posts/actions';
import {Status} from '../../constants';
import {selectEditPostStatus, selectRemovePostStatus, selectPost} from '../../ducks/posts/selectors';
import {resetEditPostStatus, resetRemovePostStatus} from '../../ducks/posts/actions';
import {Routes} from '../../config';
import {push} from 'connected-react-router';


class EditPostFormContainer extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        post: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            totalLikes: PropTypes.number.isRequired
        }).isRequired,
        replacePost: PropTypes.func.isRequired,
        removePost: PropTypes.func.isRequired,
        onEditPostSuccess: PropTypes.func.isRequired,
        onEditPostError: PropTypes.func.isRequired,
        editPostStatus: PropTypes.string.isRequired,
        onRemovePostSuccess: PropTypes.func.isRequired,
        onRemovePostError: PropTypes.func.isRequired,
        removePostStatus: PropTypes.string.isRequired
    };

    state = {
        title: '',
        content: ''
    };

    componentDidMount() {
        this.setState({
            title: this.props.post.title,
            content: this.props.post.content
        });
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handlePostDeletion = () => {
        this.props.removePost(this.props.post.id);
    };

    handleSaveClick = (event) => {
        const {title, content} = this.state;
        const post = {title, content};
        this.props.replacePost(this.props.post.id, post);

        event.preventDefault();
    };

    componentDidUpdate() {
        const {editPostStatus, onEditPostSuccess, onEditPostError} = this.props;
        const {removePostStatus, onRemovePostSuccess, onRemovePostError} = this.props;
        if (editPostStatus === Status.SUCCESS) {
            onEditPostSuccess();
        } else if (editPostStatus === Status.ERROR) {
            onEditPostError();
        }
        if (removePostStatus === Status.SUCCESS) {
            onRemovePostSuccess();
        } else if (removePostStatus === Status.ERROR) {
            onRemovePostError();
        }
    }

    render() {
        return (
            <EditPostForm
                title={this.state.title}
                content={this.state.content}
                onSave={this.handleSaveClick}
                onDelete={this.handlePostDeletion}
                onTitleInputChange={this.handleInputChange}
                onDescriptionInputChange={this.handleInputChange}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: selectPost(state, ownProps.id),
    editPostStatus: selectEditPostStatus(state),
    removePostRequest: selectRemovePostStatus(state)
});

const mapDispatchToProps = dispatch => ({
    replacePost: (id, post) => dispatch(editPostRequest(id, post)),
    removePost: id => dispatch(removePostRequest(id)),
    onEditPostSuccess: () => {
        dispatch(push(Routes.POSTS));
        dispatch(resetEditPostStatus());
    },
    onEditPostError: () => {
        alert('Can\'t edit post. Check your internet connection and try again');
        dispatch(resetEditPostStatus());
    },
    onRemovePostSuccess: () => {
        dispatch(push(Routes.POSTS));
        dispatch(resetRemovePostStatus());
    },
    onRemovePostError: () => {
        alert('Can\'t delete post. Check your internet connection and try again');
        dispatch(resetRemovePostStatus());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostFormContainer);


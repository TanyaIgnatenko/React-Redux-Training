/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import PropTypes from 'prop-types';

import EditPostForm from '../../../../components/posts/post/edit/EditPostForm/EditPostForm';
import {
    editPostRequest,
    removePostRequest,
    resetEditPostStatus,
    resetRemovePostStatus
} from '../../../../ducks/posts/actions';
import {Status} from '../../../../constants';
import {selectEditPostStatus, selectPost, selectRemovePostStatus} from '../../../../ducks/posts/selectors';
import {Routes} from '../../../../config';
import {push} from 'connected-react-router';
import Page from '../../../../components/common/Page/Page';
import {connect} from 'react-redux';
import Loader from '../../../../components/common/Loader/Loader';
import {ERROR_MSG, PAGE_TITLE} from '../../../../locale';


class EditPostPage extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired
            }).isRequired
        }).isRequired,
        post: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            totalLikes: PropTypes.number.isRequired
        }).isRequired,
        replacePost: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired,
        onEditPostSuccess: PropTypes.func.isRequired,
        onEditPostError: PropTypes.func.isRequired,
        editPostStatus: PropTypes.string.isRequired,
        onDeletePostSuccess: PropTypes.func.isRequired,
        onDeletePostError: PropTypes.func.isRequired,
        deletePostStatus: PropTypes.string.isRequired
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

    componentDidUpdate() {
        const {editPostStatus, onEditPostSuccess, onEditPostError} = this.props;
        const {deletePostStatus, onDeletePostSuccess, onDeletePostError} = this.props;
        if (editPostStatus === Status.SUCCESS) {
            onEditPostSuccess();
        } else if (editPostStatus === Status.ERROR) {
            onEditPostError();
        }
        if (deletePostStatus === Status.SUCCESS) {
            onDeletePostSuccess();
        } else if (deletePostStatus === Status.ERROR) {
            onDeletePostError();
        }
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handlePostDeletion = () => {
        this.props.deletePost(this.props.post.id);
    };

    handleSaveClick = (event) => {
        const {title, content} = this.state;
        const post = {title, content};
        this.props.replacePost(this.props.post.id, post);

        event.preventDefault();
    };

    render() {
        const {editPostStatus} = this.props;
        return (
            <Page title={PAGE_TITLE.EDIT_POST}>
                <EditPostForm
                    title={this.state.title}
                    content={this.state.content}
                    onSave={this.handleSaveClick}
                    onDelete={this.handlePostDeletion}
                    onTitleInputChange={this.handleInputChange}
                    onDescriptionInputChange={this.handleInputChange}
                />
                {editPostStatus === Status.IN_PROGRESS && <Loader/>}
            </Page>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: selectPost(state, parseInt(ownProps.match.params.id, 10)),
    editPostStatus: selectEditPostStatus(state),
    deletePostStatus: selectRemovePostStatus(state)
});

const mapDispatchToProps = dispatch => ({
    replacePost: (id, post) => dispatch(editPostRequest(id, post)),
    deletePost: id => dispatch(removePostRequest(id)),
    onEditPostSuccess: () => {
        dispatch(push(Routes.POSTS));
        dispatch(resetEditPostStatus());
    },
    onEditPostError: () => {
        alert(ERROR_MSG.EDIT);
        dispatch(resetEditPostStatus());
    },
    onDeletePostSuccess: () => {
        dispatch(push(Routes.POSTS));
        dispatch(resetRemovePostStatus());
    },
    onDeletePostError: () => {
        alert(ERROR_MSG.DELETE);
        dispatch(resetRemovePostStatus());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);

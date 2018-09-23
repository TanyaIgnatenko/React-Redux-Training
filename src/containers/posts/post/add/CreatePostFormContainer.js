import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addPostRequest, resetAddPostStatus} from '../../../../ducks/posts/actions';
import {push} from 'connected-react-router';
import {Routes} from '../../../../config';
import {selectAddPostStatus} from '../../../../ducks/posts/selectors';
import CreatePostForm from '../../../../components/posts/post/add/CreatePostForm/CreatePostForm';
import {Status} from '../../../../constants';


class CreatePostFormContainer extends React.Component {
    static propTypes = {
        addPost: PropTypes.func.isRequired,
        onAddPostSuccess: PropTypes.func.isRequired,
        onAddPostError: PropTypes.func.isRequired,
        addPostStatus: PropTypes.string.isRequired
    };

    state = {
        title: '',
        content: ''
    };

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSaveClick = (event) => {
        const {title, content} = this.state;
        const post = {title, content};
        this.props.addPost(post);

        event.preventDefault();
    };

    componentDidUpdate() {
        const {addPostStatus, onAddPostSuccess, onAddPostError} = this.props;
        if (addPostStatus === Status.SUCCESS) {
            onAddPostSuccess();
        } else if (addPostStatus === Status.ERROR) {
            onAddPostError();
        }
    }

    render() {
        return (
            <CreatePostForm
                title={this.state.title}
                content={this.state.content}
                onSave={this.handleSaveClick}
                onTitleInputChange={this.handleInputChange}
                onDescriptionInputChange={this.handleInputChange}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    addPostStatus: selectAddPostStatus(state)
});

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(addPostRequest(post)),
    onAddPostSuccess: () => {
        dispatch(push(Routes.POSTS));
        dispatch(resetAddPostStatus());
    },
    onAddPostError: () => {
        alert('Can\'t create post. Check your internet connection and try again');
        dispatch(resetAddPostStatus());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostFormContainer);


/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import PostEditionForm from '../components/PostEditionForm/PostEditionForm';
import {addPostRequest, editPostRequest, removePostRequest} from '../ducks/posts/actions';
import {selectPost} from '../ducks/posts/selectors';


class PostEditionFormContainer extends React.Component {
    static propTypes = {
        post: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            totalLikes: PropTypes.number.isRequired
        }),
        addPost: PropTypes.func.isRequired,
        replacePost: PropTypes.func.isRequired,
        removePost: PropTypes.func.isRequired
    };

    state = {
        title: '',
        content: ''
    };

    componentDidMount() {
        const postExist = this.isPostExist();
        if (postExist) {
            this.setState({
                title: this.props.post.title,
                content: this.props.post.content
            });
        }
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
        const isPostExist = this.isPostExist();
        if (isPostExist) {
            this.props.replacePost(this.props.post.id, post);
        } else {
            this.props.addPost(post);
        }

        event.preventDefault();
    };

    isPostExist = () => this.props.post !== undefined;

    render() {
        const postExist = this.isPostExist();
        return (
            <PostEditionForm
                postExist={postExist}
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
    post: selectPost(state, ownProps.post.id)
});

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(addPostRequest(post)),
    replacePost: (id, post) => dispatch(editPostRequest(id, post)),
    removePost: id => dispatch(removePostRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostEditionFormContainer);


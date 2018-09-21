/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {Routes} from '../../config';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import PostEditionForm from '../../components/PostEditionForm/PostEditionForm';
import {addPostRequest, editPostRequest, removePostRequest} from '../../ducks/posts/actions';


class PostEditionFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        };
    }

    componentDidMount() {
        // if (this.props.postExist) {
        //     this.props.previousPost = fetchPost(this.props.id);
        // }
        // const tempPost = fetchTempPost(this.props.id);
        const tempPost = null;
        if (tempPost !== null) {
            this.setState({
                title: tempPost.title,
                content: tempPost.content
            });
        } else if (this.props.postExist) {
            this.setState({
                title: this.props.previousPost.title,
                content: this.props.previousPost.content
            });
        }

        window.addEventListener('beforeunload', this.handlePageReload);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSaveClick = (event) => {
        event.preventDefault();

        const changedPost = this.getChangedPost();
        if (this.props.postExist) {
            this.props.replacePost(changedPost.id, changedPost);
        } else {
            this.props.addPost(changedPost);
        }
        //PostsStorageController.deleteTempPost(changedPost.id);
    };

    handlePostDeletion = () => {
        this.props.removePost(this.props.id);
    };

    handlePageReload = () => {
        const changedPost = this.getChangedPost();
        //PostsStorageController.addTempPost(changedPost);
    };

    getChangedPost() {
        let post;
        if (this.props.postExist) {
            post = {
                id: this.props.previousPost.id,
                title: this.state.title,
                content: this.state.content,
                totalLikes: this.props.previousPost.totalLikes
            };
        } else {
            post = {
                id: null,
                title: this.state.title,
                content: this.state.content,
                totalLikes: 0
            };
        }
        return post;
    }

    render() {
        return (
            <PostEditionForm
                postExist={this.props.postExist}
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

PostEditionFormContainer.defaultProps = {
    id: null
};

PostEditionFormContainer.propTypes = {
    id: PropTypes.number,
    previousPost: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        totalLikes: PropTypes.number.isRequired
    }),
    postExist: PropTypes.bool.isRequired,
    addPost: PropTypes.func.isRequired,
    replacePost: PropTypes.func.isRequired,
    removePost: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    previousPost: state.posts.posts.find(post => post.id === ownProps.id)
});

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(addPostRequest(post)),
    replacePost: (id, post) => dispatch(editPostRequest(id, post)),
    removePost: id => dispatch(removePostRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostEditionFormContainer);


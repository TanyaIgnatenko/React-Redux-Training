import React from 'react';
import PropTypes from 'prop-types';

import {addPostRequest, resetAddPostStatus} from '../../ducks/posts/actions';
import {push} from 'connected-react-router';
import {Routes} from '../../config';
import {selectAddPostStatus} from '../../ducks/posts/selectors';
import {Status} from '../../constants';
import Page from '../../components/common/Page/Page';
import Loader from '../../components/common/Loader/Loader';
import {connect} from 'react-redux';
import CreatePostForm from '../../components/posts/CreatePostForm/CreatePostForm';
import {ERROR_MSG, PAGE_TITLE} from '../../locale';


class CreatePostPage extends React.Component {
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
        const {addPostStatus} = this.props;
        return (
            <Page title={PAGE_TITLE.CREATE_POST}>
                <CreatePostForm
                    title={this.state.title}
                    content={this.state.content}
                    onSave={this.handleSaveClick}
                    onTitleInputChange={this.handleInputChange}
                    onDescriptionInputChange={this.handleInputChange}
                />
                {addPostStatus === Status.IN_PROGRESS && <Loader/>}
            </Page>
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
        alert(ERROR_MSG.CREATE);
        dispatch(resetAddPostStatus());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostPage);

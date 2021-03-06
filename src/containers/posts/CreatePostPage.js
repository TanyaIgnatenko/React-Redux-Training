/* eslint-disable no-alert */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import Page from '../../components/common/Page/Page';
import Loading from '../../components/common/Loading/Loading';
import CreatePostForm from '../../components/posts/CreatePostForm/CreatePostForm';
import {addPostRequest, resetAddPostStatus} from '../../ducks/posts/actions';
import {selectAddPostStatus} from '../../ducks/posts/selectors';
import {ERROR_MSG, PAGE_TITLE} from '../../locale';
import {Status, Routes} from '../../constants';


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

    componentDidUpdate() {
        const {addPostStatus, onAddPostSuccess, onAddPostError} = this.props;
        if (addPostStatus === Status.SUCCESS) {
            onAddPostSuccess();
        } else if (addPostStatus === Status.ERROR) {
            onAddPostError();
        }
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSaveClick = (event) => {
        const {title, content} = this.state;
        const post = {title, content};
        this.props.addPost(post);

        event.preventDefault();
    };

    render() {
        const {addPostStatus} = this.props;
        return (
            <Page title={PAGE_TITLE.CREATE_POST}>
                <Fragment>
                    <CreatePostForm
                        title={this.state.title}
                        content={this.state.content}
                        onSave={this.handleSaveClick}
                        onTitleInputChange={this.handleInputChange}
                        onDescriptionInputChange={this.handleInputChange}
                    />
                    {addPostStatus === Status.IN_PROGRESS && <Loading/>}
                </Fragment>
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
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

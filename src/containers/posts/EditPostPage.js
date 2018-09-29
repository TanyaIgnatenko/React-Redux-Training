/* eslint-disable react/no-did-mount-set-state,no-alert */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Page from '../../components/common/Page/Page';
import Loading from '../../components/common/Loading/Loading';
import EditPostFormContainer from './EditPostFormContainer';
import {selectFetchPostStatus, selectSelectedPost} from '../../ducks/posts/selectors';
import {fetchPostRequest, resetFetchPostStatus} from '../../ducks/posts/actions';
import {PAGE_TITLE} from '../../locale';
import {Status} from '../../constants';


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
        }),
        fetchPost: PropTypes.func.isRequired,
        fetchPostStatus: PropTypes.string.isRequired,
        resetFetchPostStatus: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.updatePost();
    }

    componentDidUpdate() {
        if (!this.props.post) {
            this.updatePost();
        }
    }

    componentWillUnmount() {
        this.props.resetFetchPostStatus();
    }

    updatePost = () => this.props.fetchPost(parseInt(this.props.match.params.id, 10));

    render() {
        const {fetchPostStatus, post} = this.props;
        const postNotLoaded = fetchPostStatus === Status.IDLE || fetchPostStatus === Status.IN_PROGRESS;
        return (
            <Page title={PAGE_TITLE.EDIT_POST}>
                <Fragment>
                    {
                        postNotLoaded ?
                            <Loading/> :
                            <EditPostFormContainer post={post}/>
                    }
                </Fragment>
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    fetchPostStatus: selectFetchPostStatus(state),
    post: selectSelectedPost(state)
});

const mapDispatchToProps = dispatch => ({
    fetchPost: id => dispatch(fetchPostRequest(id)),
    resetFetchPostStatus: () => dispatch(resetFetchPostStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);

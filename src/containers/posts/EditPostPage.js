/* eslint-disable react/no-did-mount-set-state,no-alert */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Page from '../../components/common/Page/Page';
import Loader from '../../components/common/Loader/Loader';
import {
    selectPost,
    selectSelectedPost
} from '../../ducks/posts/selectors';
import {PAGE_TITLE} from '../../locale';
import EditPostFormContainer from './EditPostFormContainer';
import {fetchPostRequest} from '../../ducks/posts/actions';


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
        fetchPost: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchPost(parseInt(this.props.match.params.id, 10));
    }

    componentDidUpdate() {
        this.props.fetchPost(parseInt(this.props.match.params.id, 10));
    }

    render() {
        const {post} = this.props;
        return (
            <Page title={PAGE_TITLE.EDIT_POST}>
                <Fragment>
                    {
                        !post ?
                            <Loader/> :
                            <EditPostFormContainer post={post}/>
                    }
                </Fragment>
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    post: selectSelectedPost(state)
});

const mapDispatchToProps = dispatch => ({
    fetchPost: id => dispatch(fetchPostRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);

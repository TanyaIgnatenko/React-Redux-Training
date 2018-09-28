import React, {Component, Fragment} from 'react';
import {selectFetchPostsStatus, selectPosts, selectSelectedPage} from '../../ducks/posts/selectors';
import {fetchPostsRequest, resetFetchPostsStatus} from '../../ducks/posts/actions';
import {selectIsAdmin} from '../../ducks/auth/selectors';
import PostsPage from '../../components/posts/PostsPage/PostsPage';
import Loading from '../../components/common/Loading/Loading';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Status} from '../../constants';

const adminPostsPerPage = 14;
const userPostsPerPage = 15;

class PostsPageContainer extends Component {
    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
            totalLikes: PropTypes.number.isRequired
        })),
        fetchPosts: PropTypes.func.isRequired,
        fetchPostsStatus: PropTypes.string.isRequired,
        resetFetchPostsStatus: PropTypes.func.isRequired,
        selectedPage: PropTypes.number.isRequired,
        isAdmin: PropTypes.bool.isRequired
    };

    componentDidMount() {
        this.updatePosts();
    }

    componentDidUpdate() {
        this.updatePosts();
    }

    componentWillUnmount() {
        this.props.resetFetchPostsStatus();
    }

    updatePosts() {
        const postsNotLoaded = !this.postsLoaded();
        if (postsNotLoaded) {
            const {isAdmin, selectedPage, fetchPosts} = this.props;
            const perPage = isAdmin ? adminPostsPerPage : userPostsPerPage;
            fetchPosts(perPage, selectedPage);
        }
    }

    postsLoaded = () => {
        const {fetchPostsStatus} = this.props;
        return fetchPostsStatus === Status.SUCCESS || fetchPostsStatus === Status.ERROR;
    };

    render() {
        const {posts, isAdmin} = this.props;
        const postsNotLoaded = !this.postsLoaded();
        return (
            <Fragment>
                {
                    postsNotLoaded ?
                        <Loading/> :
                        <PostsPage
                            posts={posts}
                            isAdmin={isAdmin}
                        />
                }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    posts: selectPosts(state),
    fetchPostsStatus: selectFetchPostsStatus(state),
    selectedPage: selectSelectedPage(state),
    canAddPosts: selectIsAdmin(state)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: (perPage, page) => dispatch(fetchPostsRequest(perPage, page)),
    resetFetchPostsStatus: () => dispatch(resetFetchPostsStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPageContainer);

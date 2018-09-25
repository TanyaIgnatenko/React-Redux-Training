import React, {Component, Fragment} from 'react';
import {selectPosts, selectSelectedPage} from '../../ducks/posts/selectors';
import {fetchPostsRequest} from '../../ducks/posts/actions';
import {selectIsAdmin} from '../../ducks/auth/selectors';
import PostsPage from '../../components/posts/PostsPage/PostsPage';
import Loader from '../../components/common/Loader/Loader';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const adminPostsPerPage = 14;
const userPostsPerPage = 15;

class PostsPageContainer extends Component {
    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            totalLikes: PropTypes.number.isRequired
        })),
        fetchPosts: PropTypes.func.isRequired,
        selectedPage: PropTypes.number.isRequired,
        isAdmin: PropTypes.bool.isRequired
    };

    componentDidMount() {
        this.updatePosts();
    }

    componentDidUpdate() {
        this.updatePosts();
    }

    updatePosts() {
        const {posts} = this.props;
        if (!posts) {
            const {isAdmin, selectedPage, fetchPosts} = this.props;
            const perPage = isAdmin ? adminPostsPerPage : userPostsPerPage;
            fetchPosts(perPage, selectedPage);
        }
    }

    render() {
        const {isAdmin, posts} = this.props;
        return (
            <Fragment>
                {
                    !posts ?
                        <Loader/> :
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
    selectedPage: selectSelectedPage(state),
    isAdmin: selectIsAdmin(state)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: (perPage, page) => dispatch(fetchPostsRequest(perPage, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPageContainer);

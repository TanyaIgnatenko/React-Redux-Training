import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Page from '../../components/common/Page/Page';
import Grid from '../../components/common/Grid/Grid';
import PostContainer from './PostContainer';
import NewPostButtonContainer from './NewPostButtonContainer';
import {fetchPostsRequest} from '../../ducks/posts/actions';
import {selectPageCount, selectPosts, selectSelectedPage} from '../../ducks/posts/selectors';
import {selectIsAdmin} from '../../ducks/auth/selectors';
import {PAGE_TITLE} from '../../locale';
import Pagination from '../../components/common/Pagination/Pagination';


class PostsPageContainer extends React.Component {
    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            totalLikes: PropTypes.number.isRequired
        })),
        fetchPosts: PropTypes.func.isRequired,
        selectedPage: PropTypes.bool.isRequired,
        pageCount: PropTypes.number.isRequired,
        onPageSelected: PropTypes.func.isRequired,
        isAdmin: PropTypes.bool.isRequired
    };

    componentDidMount() {
        this.props.fetchPosts();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.selectedPage !== this.props.selectedPage) {
            this.setState({posts: this.props.fetchPosts(nextProps.selectedPage)});
        }
    }

    render() {
        const posts = this.props.posts.map((post) => <PostContainer key={post.id} post={post}/>);
        const elems = this.props.isAdmin ? [<NewPostButtonContainer key={0}/>, ...posts] : [...posts];

        const {selectedPage, pageCount, onPageSelected} = this.props;
        return (
            <Page title={PAGE_TITLE.POSTS}>
                <Fragment>
                    <Grid>
                        {elems}
                    </Grid>
                    <Pagination pageCount={pageCount} selectedPage={selectedPage} onPageSelected={onPageSelected}/>
                </Fragment>
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    posts: selectPosts(state),
    selectedPage: selectSelectedPage(state),
    pageCount: selectPageCount(state),
    isAdmin: selectIsAdmin(state)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPostsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPageContainer);

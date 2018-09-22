import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Page from '../../components/Page/Page';
import Grid from '../../components/Grid/Grid';
import PostContainer from './PostContainer';
import NewPostButtonContainer from './NewPostButtonContainer';
import {fetchPostsRequest} from '../../ducks/posts/actions';
import {selectPosts} from '../../ducks/posts/selectors';


class PostsPageContainer extends React.Component {
    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            totalLikes: PropTypes.number.isRequired
        })),
        fetchPosts: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const posts = this.props.posts.map((post) => <PostContainer key={post.id} post={post}/>);
        const elems = [<NewPostButtonContainer key={0}/>, ...posts];

        return (
            <Page title='Post List'>
                <Grid>
                    {elems}
                </Grid>
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    posts: selectPosts(state)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPostsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPageContainer);

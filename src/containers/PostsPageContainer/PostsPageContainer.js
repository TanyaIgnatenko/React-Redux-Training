import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Page from '../../components/Page/Page';
import Grid from '../../components/Grid/Grid';
import PostContainer from '../PostContainer/PostContainer';
import NewPostButtonContainer from '../NewPostButtonContainer/NewPostButtonContainer';
import {fetchPostsRequest} from '../../ducks/posts/actions';


class PostsPageContainer extends React.Component {
    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            totalLikes: PropTypes.number.isRequired
        })),
        fetchPosts: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        this.posts = this.props.posts.map((post) =>
            <PostContainer
                key={post.id}
                post={post}
                history={this.props.history}
            />);

        const elems = [<NewPostButtonContainer key={0} history={this.props.history}/>, ...this.posts];
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
    posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPostsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPageContainer);

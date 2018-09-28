import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import PostContainer from '../../../containers/posts/PostContainer';
import PaginationContainer from '../../../containers/posts/PaginationContainer';
import Page from '../../common/Page/Page';
import Grid from '../../common/Grid/Grid';
import NewPostButtonContainer from '../../../containers/posts/NewPostButtonContainer';
import {PAGE_TITLE} from '../../../locale';


const PostsPage = (props) => {
    const {canAddPosts} = props;
    const posts = props.posts.map(post => <PostContainer key={post.id} post={post}/>);

    return (
        <Page title={PAGE_TITLE.POSTS}>
            <Fragment>
                <Grid>
                    <Fragment>
                        {canAddPosts && <NewPostButtonContainer/>}
                        {posts}
                    </Fragment>
                </Grid>
                <PaginationContainer/>
            </Fragment>
        </Page>
    );
};

PostsPage.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
        totalLikes: PropTypes.number.isRequired
    })),
    canAddPosts: PropTypes.bool.isRequired
};

export default PostsPage;

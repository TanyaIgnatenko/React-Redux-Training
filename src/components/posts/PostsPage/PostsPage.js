import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PostContainer from './PostContainer';
import PaginationContainer from './PaginationContainer';
import Page from '../../components/common/Page/Page';
import Grid from '../../components/common/Grid/Grid';
import NewPostButtonContainer from './NewPostButtonContainer';
import {PAGE_TITLE} from '../../locale';


export default class PostsPage extends React.Component {
    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            totalLikes: PropTypes.number.isRequired
        })),
        isAdmin: PropTypes.bool.isRequired
    };

    render() {
        const {isAdmin} = this.props;
        const posts = this.props.posts.map(post => <PostContainer key={post.id} post={post}/>);
        const elems = isAdmin ? [<NewPostButtonContainer key={0}/>, ...posts] : posts;

        return (
            <Page title={PAGE_TITLE.POSTS}>
                <Fragment>
                    <Grid>
                        {elems}
                    </Grid>
                    <PaginationContainer/>
                </Fragment>
            </Page>
        );
    }
}

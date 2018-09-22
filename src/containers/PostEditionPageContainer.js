import React from 'react';
import PropTypes from 'prop-types';

import PostEditionFormContainer from './PostEditionFormContainer';
import Page from '../components/Page/Page';

export default function PostEditionPageContainer(props) {
    const postId = parseInt(props.match.params.id, 10);
    return (
        <Page title='Edit post'>
            <PostEditionFormContainer postExist={true} id={postId}/>
        </Page>
    );
}

PostEditionPageContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    })
};

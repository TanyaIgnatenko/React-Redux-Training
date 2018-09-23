import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../../../components/common/Page/Page';
import EditPostFormContainer from './EditPostFormContainer';

export default function PostEditionPageContainer(props) {
    const postId = parseInt(props.match.params.id, 10);
    return (
        <Page title='Edit post'>
            <EditPostFormContainer id={postId}/>
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

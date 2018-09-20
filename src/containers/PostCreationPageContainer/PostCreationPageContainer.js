import React from 'react';
import PropTypes from 'prop-types';

import PostEditionFormContainer from '../PostEditionFormContainer/PostEditionFormContainer';
import Page from '../../components/Page/Page';

export default function PostCreationPageContainer(props) {
    return (
        <Page title='Create post'>
            <PostEditionFormContainer postExist={false} history={props.history}/>
        </Page>
    );
}

PostCreationPageContainer.propTypes = {
    history: PropTypes.object.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../../../components/common/Page/Page';
import CreatePostFormContainer from './CreatePostFormContainer';

export default function PostCreationPageContainer() {
    return (
        <Page title='Create post'>
            <CreatePostFormContainer/>
        </Page>
    );
}

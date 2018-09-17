import React from 'react';
import PropTypes from 'prop-types';

import CardEditionFormContainer from '../CardEditionFormContainer/CardEditionFormContainer';
import Page from '../../components/Page/Page';

export default function CardCreationPageContainer(props) {
    return (
        <Page title='Create card'>
            <CardEditionFormContainer cardExist={false} history={props.history}/>
        </Page>
    );
}

CardCreationPageContainer.propTypes = {
    history: PropTypes.object.isRequired
};

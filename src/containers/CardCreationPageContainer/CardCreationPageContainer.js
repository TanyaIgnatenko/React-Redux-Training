import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page/Page';
import CardEditionFormContainer from '../CardEditionFormContainer/CardEditionFormContainer';

export default function CardCreationPageContainer(props) {
    return (
        <Page title='Create card' content={
            <CardEditionFormContainer history={props.history}/>
        }/>
    );
}

CardCreationPageContainer.propTypes = {
    history: PropTypes.object.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';

import CardEditionFormContainer from '../CardEditionFormContainer/CardEditionFormContainer';
import Page from '../../components/Page/Page';

export default function CardEditionPageContainer(props) {
    const cardId = parseInt(props.match.params.id, 10);
    return (
        <Page title='Edit card' children={
            <CardEditionFormContainer cardExist={true} id={cardId} history={props.history}/>
        }/>
    );
}

CardEditionPageContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }),
    history: PropTypes.object.isRequired
};

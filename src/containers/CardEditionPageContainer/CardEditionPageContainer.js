import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page/Page';
import CardEditionFormContainer from '../CardEditionFormContainer/CardEditionFormContainer';

export default function CardEditionPageContainer(props) {
    const cardId = parseInt(props.match.params.id, 10);
    return (
        <Page title='Edit card' content={
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

import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page/Page';
import CardEditionFormContainer from '../CardEditionFormContainer/CardEditionFormContainer';

export default function CardEditionPageContainer(props) {
    const cardId = props.match.params.id;
    return (
        <Page title='Edit card' content={
            <CardEditionFormContainer id={cardId} history={props.history}/>
        }/>
    );
}

CardEditionPageContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }),
    history: PropTypes.history.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';

import Page from '../Page/Page';
import AddNewCardButton from './NewCardButton/NewCardButton';
import Grid from '../Grid/Grid';

export default function CardListPage(props) {
    const addNewCardButton = <AddNewCardButton/>;
    const pageContent = <Grid elems={[addNewCardButton, ...props.cards]}/>;
    return (
        <Page title='Card List' content={pageContent}/>
    );
}

CardListPage.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.element)
};

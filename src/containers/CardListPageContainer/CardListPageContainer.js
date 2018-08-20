import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page/Page';
import Grid from '../../components/Grid/Grid';
import CardStorageController from '../../CardStorageController';
import CardContainer from '../CardContainer/CardContainer';
import NewCardButtonContainer from '../NewCardButtonContainer/NewCardButtonContainer';

export default class CardListPage extends React.Component {
    componentDidMount() {
        const cards = CardStorageController.fetchCards();
        this.cards = cards.map((card) =>
            <CardContainer
                key={card.id}
                card={card}
                history={this.props.history}
            />);
    }

    render() {
        const newCardButton = <NewCardButtonContainer history={this.props.history}/>;
        const pageContent = <Grid elems={[newCardButton, ...this.cards]}/>;
        return (
            <Page title='Card List' content={pageContent}/>
        );
    }
}

CardListPage.propTypes = {
    history: PropTypes.object.isRequired
};

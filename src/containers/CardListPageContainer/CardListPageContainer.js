import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page/Page';
import Grid from '../../components/Grid/Grid';
import CardContainer from '../CardContainer/CardContainer';
import NewCardButtonContainer from '../NewCardButtonContainer/NewCardButtonContainer';
import * as CardsStorageController from '../../CardStorageController';


export default class CardListPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.cards = [];
    }
    componentDidMount() {

    }

    render() {
        const cards = CardsStorageController.fetchCards();
        this.cards = cards.map((card) =>
            <CardContainer
                key={card.id}
                card={card}
                history={this.props.history}
            />);
        const newCardButton = <NewCardButtonContainer history={this.props.history}/>;
        const pageContent = <Grid elems={[newCardButton, ...this.cards]}/>;
        return (
            <Page title='Card List' content={pageContent}/>
        );
    }
}

CardListPageContainer.propTypes = {
    history: PropTypes.object.isRequired
};

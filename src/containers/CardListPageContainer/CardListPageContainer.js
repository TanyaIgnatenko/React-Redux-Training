import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Page from '../../components/Page/Page';
import Grid from '../../components/Grid/Grid';
import CardContainer from '../CardContainer/CardContainer';
import NewCardButtonContainer from '../NewCardButtonContainer/NewCardButtonContainer';
import {fetchCardsRequest} from '../../ducks/cards/actions';


class CardListPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.cards = [];
    }

    componentDidMount() {
        this.props.fetchCards();
    }

    render() {
        this.cards = this.props.cards.map((card) =>
            <CardContainer
                key={card.id}
                card={card}
                history={this.props.history}
            />);

        const elems = [<NewCardButtonContainer key={0} history={this.props.history}/>, ...this.cards];
        return (
            <Page title='Card List'>
                <Grid>
                    {elems}
                </Grid>
            </Page>
        );
    }
}

CardListPageContainer.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        likeCount: PropTypes.number.isRequired
    })),
    fetchCards: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    cards: state.cards
});

const mapDispatchToProps = dispatch => ({
    fetchCards: () => dispatch(fetchCardsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardListPageContainer);

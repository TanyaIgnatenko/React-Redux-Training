import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import Page from '../Pages/Page/Page';
import CardListPage from '../Pages/CardListPage/CardListPage';
import Card from '../Pages/CardListPage/Card/Card';
import AddNewCardButton from '../Pages/CardListPage/AddNewCardButton/AddNewCardButton';
import Grid from '../Pages/Grid/Grid';
import CreateCardForm from '../Pages/CreateCardPage/CreateCardForm/CreateCardForm';
import EditCardForm from '../Pages/EditCardPage/EditCardForm/EditCardForm';
import CreateCardFormContainer from '../../containers/CreateCardFormContainer/CreateCardFormContainer';
import Routes from '../../constants';


export default function App(props) {
    return (
        <div>
            <Switch>
                <Route exact path=Routes.CARD_LIST component={<CardListPage cards={props.cards} history={props.history}}/>}/>
                <Route path=Routes.CREATE_CARD component={<CreateCardPage history={props.history}}/>
                <Route path=Routes.EDIT_CARD component={EditCardPage}/>
            </Switch>
        </div>
    );
}

App.propTypes = {
    history: PropTypes.object,
    cards: PropTypes.arrayOf(PropTypes.element).isRequired
};

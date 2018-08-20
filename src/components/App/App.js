import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import CardListPage from '../Pages/CardListPage/CardListPage';
import EditCardPage from '../../containers/CardEditionPageContainer/EditCardPage';
import CreateCardPage from '../../containers/CardCreationPageContainer/CreateCardPage';
import Routes from '../../routes';


export default function App(props) {
    return (
        <div>
            <Switch>
                <Route exact path={Routes.CARD_LIST} component={
                    <CardListPage cards={props.cards} history={props.history}/>
                }/>
                <Route path={Routes.CREATE_CARD} component={
                    <CreateCardPage history={props.history}/>
                }/>
                <Route path={Routes.EDIT_CARD} component={
                    EditCardPage
                }/>
            </Switch>
        </div>
    );
}

App.propTypes = {
    history: PropTypes.object,
    cards: PropTypes.arrayOf(PropTypes.element)
};

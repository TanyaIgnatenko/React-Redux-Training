import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import CardCreationPageContainer from '../../containers/CardCreationPageContainer/CardCreationPageContainer';
import CardEditionPageContainer from '../../containers/CardEditionPageContainer/CardEditionPageContainer';
import CardListPageContainer from '../../containers/CardListPageContainer/CardListPageContainer';
import Routes from '../../config';


export default function AppContainer(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={Routes.CARD_LIST} component={CardListPageContainer}/>
                <Route path={Routes.CREATE_CARD} component={CardCreationPageContainer}/>
                <Route path={Routes.EDIT_CARD} component={CardEditionPageContainer}/>
            </Switch>
        </BrowserRouter>
    );
}

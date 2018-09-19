import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import CardCreationPageContainer from '../../containers/CardCreationPageContainer/CardCreationPageContainer';
import CardEditionPageContainer from '../../containers/CardEditionPageContainer/CardEditionPageContainer';
import CardListPageContainer from '../../containers/CardListPageContainer/CardListPageContainer';
import {Routes} from '../../config';
import NavBar from '../../components/NavBar/NavBar';
import LoginPageContainer from '../LoginPageContainer/LoginPageContainer';
import SignUpPageContainer from '../SignUpPageContainer/SignUpPageContainer';


export default function AppContainer(props) {
    return (
        <Fragment>
            <NavBar/>
            <BrowserRouter>
                <Switch>
                    <Route exact path={Routes.CARD_LIST} component={CardListPageContainer}/>
                    <Route path={Routes.LOGIN} component={LoginPageContainer}/>
                    <Route path={Routes.SIGN_UP} component={SignUpPageContainer}/>
                    <Route path={Routes.CREATE_CARD} component={CardCreationPageContainer}/>
                    <Route path={Routes.EDIT_CARD} component={CardEditionPageContainer}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}

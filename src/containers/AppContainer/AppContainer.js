import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Routes} from '../../config';
import LoginPageContainer from '../LoginPageContainer/LoginPageContainer';
import SignUpPageContainer from '../SignUpPageContainer/SignUpPageContainer';
import NavBarContainer from '../NavBarContainer/NavBarContainer';


export default function AppContainer(props) {
    return (
        <Fragment>
            <BrowserRouter>
                <Fragment>
                    <NavBarContainer/>
                    <Switch>
                        {/*<Route exact path={Routes.CARD_LIST} component={CardListPageContainer}/>*/}
                        <Route path={Routes.LOGIN} component={LoginPageContainer}/>
                        <Route path={Routes.SIGN_UP} component={SignUpPageContainer}/>
                        {/*<Route path={Routes.CREATE_CARD} component={CardCreationPageContainer}/>*/}
                        {/*<Route path={Routes.EDIT_CARD} component={CardEditionPageContainer}/>*/}
                    </Switch>
                </Fragment>
            </BrowserRouter>
        </Fragment>
    );
}

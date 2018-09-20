import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Routes} from '../../config';
import LoginPageContainer from '../LoginPageContainer/LoginPageContainer';
import SignUpPageContainer from '../SignUpPageContainer/SignUpPageContainer';
import NavBarContainer from '../NavBarContainer/NavBarContainer';
import {connect} from 'react-redux';
import CardListPageContainer from '../CardListPageContainer/CardListPageContainer';
import CardCreationPageContainer from '../CardCreationPageContainer/CardCreationPageContainer';
import CardEditionPageContainer from '../CardEditionPageContainer/CardEditionPageContainer';
import Page from '../../components/Page/Page';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const AuthorizedPage = () => (
    <Page title='Authorized page'>
        <h1>Congrats! You have logged! :)</h1>
    </Page>
);

function AppContainer(props) {
    return (
        <Fragment>
            <BrowserRouter>
                <Fragment>
                    <NavBarContainer/>
                    <Switch>
                        <Route path={Routes.LOGIN} component={LoginPageContainer}/>
                        <Route path={Routes.SIGN_UP} component={SignUpPageContainer}/>
                        <Route exact path={Routes.CARD_LIST} component={() => <h1> Card List</h1>}/>
                        <PrivateRoute path={Routes.CREATE_CARD} component={AuthorizedPage}/>
                        <PrivateRoute path={Routes.EDIT_CARD} component={AuthorizedPage}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        </Fragment>
    );
}

const mapStateToProps = state => ({
    isLoggedIn: state.user !== null
});

export default connect(mapStateToProps, null)(AppContainer);

import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import {Routes} from '../../config';
import PropTypes from 'prop-types';

import LoginPageContainer from '../LoginPageContainer/LoginPageContainer';
import SignUpPageContainer from '../SignUpPageContainer/SignUpPageContainer';
import NavBarContainer from '../NavBarContainer/NavBarContainer';
import {connect} from 'react-redux';
import PostsPageContainer from '../PostsPageContainer/PostsPageContainer';
import PostCreationPageContainer from '../PostCreationPageContainer/PostCreationPageContainer';
import PostEditionPageContainer from '../PostEditionPageContainer/PostEditionPageContainer';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

function AppContainer(props) {
    return (
        <Fragment>
            <NavBarContainer/>
            <Switch>
                <Route path={Routes.LOGIN} component={LoginPageContainer}/>
                <Route path={Routes.SIGN_UP} component={SignUpPageContainer}/>
                <Route exact path={Routes.POSTS} component={PostsPageContainer}/>
                <PrivateRoute path={Routes.CREATE_POST} component={PostCreationPageContainer}/>
                <PrivateRoute path={Routes.EDIT_POST} component={PostEditionPageContainer}/>
            </Switch>
        </Fragment>
    );
}

AppContainer.propTypes = {
    isLoggedIn: PropTypes.bool,
    location: PropTypes.object
};

const mapStateToProps = state => ({
    isLoggedIn: state.user !== null,
    location: state.router.location
});

export default connect(mapStateToProps, null)(AppContainer);

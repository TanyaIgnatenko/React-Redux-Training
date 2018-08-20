import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import Routes from '../../routes';
import CardCreationPageContainer from '../../containers/CardCreationPageContainer/CardCreationPageContainer';
import CardEditionPageContainer from '../../containers/CardEditionPageContainer/CardEditionPageContainer';
import CardListPageContainer from '../../containers/CardListPageContainer/CardListPageContainer';


export default function App(props) {
    return (
        <div>
            <Switch>
                <Route exact path={Routes.CARD_LIST} render={
                    props => <CardListPageContainer {...props} history={props.history}/>
                }/>
                <Route path={Routes.CREATE_CARD} render={
                    props => <CardCreationPageContainer {...props} history={props.history}/>
                }/>
                <Route path={Routes.EDIT_CARD} render={
                    props => <CardEditionPageContainer {...props} history={props.history}/>
                }/>
            </Switch>
        </div>
    );
}

App.propTypes = {
    history: PropTypes.object.isRequired
};

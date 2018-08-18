import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Page from '../Page/Page';
import Card from '../Card/Card';
import AddNewCardButton from '../AddNewCardButton/AddNewCardButton';
import Grid from '../Grid/Grid';
import CreateCardForm from '../CreateCardForm/CreateCardForm';
import EditCardForm from '../EditCardForm/EditCardForm';
import CreateCardFormContainer from '../../containers/CreateCardFormContainer/CreateCardFormContainer';


export default function App(props) {
    const description = `Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.\
                     Por scientie, musica, sport etc, litot Europa.`;
    const card = (<Card
        id={1}
        title='Card1'
        description={description}
        editHandler={() => {}}
    />
    );
    const addNewCardButton = <AddNewCardButton/>;
    const cardList = [addNewCardButton, card, card, card, card, card, card, card, card];

    const cardListGrid = <Grid elems={cardList}/>;
    const createCardForm = <CreateCardFormContainer/>;
    const editCardForm = <EditCardForm title='My awesome card' description={description}/>;

    const cardListPage = () => <Page title='Card list' content={cardListGrid}/>;
    const createCardPage = () => <Page title='Create card' content={createCardForm}/>;
    const editCardPage = () => <Page title='Edit card' content={editCardForm}/>;

    return (
        <div>
            <Switch>
                <Route exact path='/' component={cardListPage}/>
                <Route path='/create' component={createCardPage}/>
                <Route path='/edit/:id' component={editCardPage}/>
            </Switch>
        </div>
    );
}

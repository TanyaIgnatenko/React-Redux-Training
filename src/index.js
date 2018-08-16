import React from 'react';
import {render} from 'react-dom';
import './index.css';

import Card from './components/Card/Card';
import Page from './components/Page/Page';
import Grid from './components/Grid/Grid';
import AddNewCardButton from './components/AddNewCardButton/AddNewCardButton';
import CreateCardForm from './components/CreateCardForm/CreateCardForm';
import EditCardForm from './components/EditCardForm/EditCardForm';

const description = `Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.\
                     Por scientie, musica, sport etc, litot Europa.`;

const mountNode = document.getElementById('root');
const card = <Card title='Card1' description={description} editHandler={() => {}}/>;
const addNewCardButton = <AddNewCardButton/>
const cardList = [addNewCardButton, card, card, card, card, card, card, card, card];
const grid = <Grid elems={cardList}/>;
// const createCardForm = <CreateCardForm/>;
// const editCardForm = <EditCardForm title='My awesome card' description={description}/>;

render(<Page title='Card list' content={grid}/>, mountNode);

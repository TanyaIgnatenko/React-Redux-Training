import React from 'react';
import App from '../../components/App/App';
import Card from '../../components/Pages/CardListPage/Card/Card';
import CardContainer from '../../components/CardContainer/CardContainer';
import Grid from '../../components/Pages/Grid/Grid';
import Page from '../../components/Pages/Page/Page';
import AddNewCardButton from '../../components/Pages/CardListPage/NewCardButton/NewCardButton';
import CreateCardFormContainer from '../../components/CardEditionFormContainer/CardEditionFormContainer';
import EditCardForm from '../../components/Pages/EditCardForm/EditCardForm';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.cardsData = localStorage.getItem('cardsData');
    }

    render() {
        const cards = this.cardsData.map((cardData, idx) => <CardContainer key={idx} cardData={cardData}/>)
        const addNewCardButton = <AddNewCardButton/>;
        const cardList = [addNewCardButton, ...cards];

        const cardListGrid = <Grid elems={cardList}/>;
        const createCardForm = <CreateCardFormContainer history={props.history}/>;
        const editCardForm = <EditCardForm title='My awesome card' description={description}/>;

        const cardListPage = () => <Page title='Card list' content={cardListGrid}/>;
        const createCardPage = () => <Page title='Create card' content={createCardForm}/>;
        const editCardPage = () => <Page title='Edit card' content={editCardForm}/>;

        // const description = `Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.\
        //              Por scientie, musica, sport etc, litot Europa.`;
        // const card = (<Card
        //     id={1}
        //     title='Card1'
        //     description={description}
        //     editHandler={() => {}}
        // />
        // );

        return (
            <App/>
        );
    }

}

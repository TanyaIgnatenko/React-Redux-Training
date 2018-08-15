import React from 'react';
import {render} from 'react-dom';

import Card from './components/Card/Card';
import Page from './components/Page/Page';

const mountNode = document.getElementById('root');
const description = `Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.
                     Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
                     Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.
                     Omnicos directe al desirabilite de un nov lingua franca.`;
const pageContent = <Card title='Card1' description={description} editHandler={() => {}}/>;
render(<Page title='Card List' content={pageContent}/>, mountNode);

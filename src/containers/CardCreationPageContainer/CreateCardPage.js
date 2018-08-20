import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Pages/Page/Page';
import CreateCardForm from './CreateCardForm/CreateCardForm';

export default function CreateCardPage(props) {
    return (
        <Page title='Create card' content={<CreateCardForm history={props.history}/>}/>
    );
}

CreateCardForm.propTypes = {
    history: PropTypes.object
};

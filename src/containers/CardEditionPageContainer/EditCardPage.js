import React from 'react';
import PropTypes from 'prop-types';
import EditCardForm from '../../components/Pages/EditCardForm/EditCardForm';

export default function EditCardPage(props) {
    return(
        <Page title='Edit card' content={<EditCardForm title={} description={}/>}/>
    );
}

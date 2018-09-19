import React from 'react';
import PropTypes from 'prop-types';

import NewCardButton from '../../components/NewCardButton/NewCardButton';
import {Routes} from '../../config';

export default class NewCardButtonContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => this.props.history.push(Routes.CREATE_CARD);

    render() {
        return (
            <NewCardButton onClick={this.handleClick}/>
        );
    }
}

NewCardButtonContainer.propTypes = {
    history: PropTypes.object.isRequired
};


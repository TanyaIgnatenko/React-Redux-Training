import React from 'react';
import PropTypes from 'prop-types';

import NewCardButton from '../../components/NewCardButton/NewCardButton';
import Routes from '../../routes';

export default class NewCardButtonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.history.push(Routes.CREATE_CARD);
    }

    render() {
        return (
            <NewCardButton onClick={this.handleClick}/>
        );
    }
}

NewCardButtonContainer.propTypes = {
    history: PropTypes.object.isRequired
};


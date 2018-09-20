import React from 'react';
import PropTypes from 'prop-types';

import NewPostButton from '../../components/NewPostButton/NewPostButton';
import {Routes} from '../../config';

export default class NewPostButtonContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => this.props.history.push(Routes.CREATE_POST);

    render() {
        return (
            <NewPostButton onClick={this.handleClick}/>
        );
    }
}

NewPostButtonContainer.propTypes = {
    history: PropTypes.object.isRequired
};


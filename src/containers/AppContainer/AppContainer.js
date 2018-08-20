import React from 'react';
import PropTypes from 'prop-types';

import App from '../../components/App/App';


export default class AppContainer extends React.Component {
    render() {
        return (
            <App history={this.props.history}/>
        );
    }
}

AppContainer.propTypes = {
    history: PropTypes.history.isRequired
};

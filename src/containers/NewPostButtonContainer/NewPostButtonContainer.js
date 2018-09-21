import React from 'react';
import PropTypes from 'prop-types';
import {Routes} from '../../config';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import NewPostButton from '../../components/NewPostButton/NewPostButton';


class NewPostButtonContainer extends React.Component {
    static propTypes = {
        handleClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <NewPostButton onClick={this.props.handleClick}/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    handleClick: () => dispatch(push(Routes.CREATE_POST))
});

export default connect(null, mapDispatchToProps)(NewPostButtonContainer);



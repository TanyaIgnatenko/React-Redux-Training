import React from 'react';
import PropTypes from 'prop-types';

import NewPostButton from '../../components/NewPostButton/NewPostButton';
import {Routes} from '../../config';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';

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



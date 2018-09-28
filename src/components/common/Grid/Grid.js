import React from 'react';
import PropTypes from 'prop-types';

import './Grid.scss';

export default function Grid(props) {
    return (
        <div className={'grid__container'}>
            {props.children}
        </div>
    );
}

Grid.propTypes = {
    children: PropTypes.element.isRequired
};

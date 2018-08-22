import React from 'react';
import PropTypes from 'prop-types';

import './Grid.css';

export default function Grid(props) {
    const elems = props.elems.map((elem, idx) => <div key={idx} display='inline'> {elem} </div>);
    return (
        <div className='grid__container'>
            {elems}
        </div>
    );
}

Grid.propTypes = {
    elems: PropTypes.arrayOf(PropTypes.element).isRequired
};

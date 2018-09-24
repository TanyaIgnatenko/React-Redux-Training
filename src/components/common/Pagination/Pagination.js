import React from 'react';
import PropTypes from 'prop-types';
import {PaginationItem, PaginationLink} from 'reactstrap';

function Pagination(props) {
    const paginationItems = [];
    for (let i = 1; i <= props.pageCount; ++i) {
        const active = i === props.selectedPage;
        const paginationItem = (
            <PaginationItem active={active}>
                <PaginationLink onClick={props.onPageSelected}/>i<PaginationLink/>
            </PaginationItem>
        );
        paginationItems.push(paginationItem);
    }
    return (
        <Pagination aria-label='Page navigation example'>
            {paginationItems}
        </Pagination>
    );
}

Pagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    selectedPage: PropTypes.number.isRequired,
    onPageSelected: PropTypes.func.isRequired
};

export default Pagination;

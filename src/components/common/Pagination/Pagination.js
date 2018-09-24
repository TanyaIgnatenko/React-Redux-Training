import React from 'react';
import PropTypes from 'prop-types';
import * as ReactStrap from 'reactstrap';

function Pagination(props) {
    const {pageCount, selectedPage, onPageSelected} = props;
    const pageNumbers = Array.from({length: pageCount}, (_, idx) => idx + 1);
    const selectPrevPage = () => onPageSelected(selectedPage - 1);
    const selectNextPage = () => onPageSelected(selectedPage + 1);
    return (
        <ReactStrap.Pagination>
            <ReactStrap.PaginationItem disabled={selectedPage === 1}>
                <ReactStrap.PaginationLink previous onClick={selectPrevPage}/>
            </ReactStrap.PaginationItem>
            {
                pageNumbers.map(pageNumber => (
                    <ReactStrap.PaginationItem key={pageNumber}
                                               active={pageNumber === selectedPage}
                                               disabled={pageNumber === selectedPage}>
                        <ReactStrap.PaginationLink onClick={() => onPageSelected(pageNumber)}>
                            {pageNumber}
                        </ReactStrap.PaginationLink>
                    </ReactStrap.PaginationItem>
                ))
            }
            <ReactStrap.PaginationItem disabled={selectedPage === pageCount}>
                <ReactStrap.PaginationLink next onClick={selectNextPage}/>
            </ReactStrap.PaginationItem>
        </ReactStrap.Pagination>
    );
}

Pagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    selectedPage: PropTypes.number.isRequired,
    onPageSelected: PropTypes.func.isRequired
};

export default Pagination;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Pagination from '../../components/common/Pagination/Pagination';
import {selectPageCount, selectSelectedPage} from '../../ducks/posts/selectors';
import {resetFetchPostsStatus, selectPage} from '../../ducks/posts/actions';

class PaginationContainer extends Component {
    static propTypes = {
        selectPage: PropTypes.func.isRequired,
        selectedPage: PropTypes.number.isRequired,
        pageCount: PropTypes.number.isRequired
    };

    render() {
        const {selectedPage, pageCount, selectPage} = this.props;
        return (
            <Pagination
                pageCount={pageCount}
                selectedPage={selectedPage}
                onPageSelected={selectPage}
            />
        );
    }
}

const mapStateToProps = state => ({
    selectedPage: selectSelectedPage(state),
    pageCount: selectPageCount(state)
});

const mapDispatchToProps = dispatch => ({
    selectPage: (page) => {
        dispatch(selectPage(page));
        dispatch(resetFetchPostsStatus());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);

import css from './pagination.module.scss';
import {IPaginationTypes} from './pagination';
import classNames from 'classnames';
import {ArrowLeftPagination, ArrowRightPagination} from '@/assets/icons/arrows';
import ReactPaginate from 'react-paginate';

function PaginationComponent({
                                 totalCount,
                                 pageSize,
                                 handlePageClick,
                                 pageNumber,
                                 classNamesComponent = ''
                             }: IPaginationTypes) {
    const styles = classNames({
        [classNamesComponent]: totalCount !== 0
    });
    return (
        <div className={styles}>
            {(totalCount !== 0 && (totalCount / pageSize) > 1) && (
                <ReactPaginate
                    breakClassName={css.breakItem}
                    previousClassName={pageNumber !== 1 ? css.prev : 'd-none'}
                    nextClassName={css.next}
                    pageClassName={css.item}
                    activeClassName={css.itemActive}
                    forcePage={pageNumber - 1}
                    className={css.pagination}
                    breakLabel='...'
                    nextLabel={<ArrowRightPagination className={css.next}/>}

                    onPageChange={(i: { selected: number }) => {
                        handlePageClick(i.selected + 1);
                        window.scrollTo(0, 0);
                    }}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={totalCount / pageSize}
                    previousLabel={<ArrowLeftPagination className={css.prev}/>}
                />
            )}
        </div>
    );
}

export default PaginationComponent;

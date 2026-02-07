export interface IPaginationTypes {
    classNamesComponent?: string | '';
    totalCount: number;
    pageSize: number;
    handlePageClick: (pageNumber: number) => void;
    pageNumber: number;
}

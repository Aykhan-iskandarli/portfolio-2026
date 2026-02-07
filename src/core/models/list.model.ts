export class ListModel<T> {
    public items: T[] = [];
    public totalCount: number = 0;

    constructor(data: any) {
        this._setItems(data);
        this._setTotalCount(data);
    }

    private _setItems({items}: any) {
        this.items = items;
    }

    private _setTotalCount({totalCount}: any) {
        this.totalCount = totalCount;
    }


}
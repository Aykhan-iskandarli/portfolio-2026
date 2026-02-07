import { IMenuItems } from '@/core/layouts/public/public';

export class MenuModel {
    public id: number | null = null;
    public topPriority: number | null = null;
    public rightPriority: string = '';
    public name: string = '';
    public url: string = '';
    public menuItems: IMenuItems | undefined;

    constructor(data: any) {
        this._setId(data);
        this._setTopPriority(data);
        this._setRightPriority(data);
        this._setName(data);
        this._setUrl(data);
        this._setMenuItems(data);
    }

    private _setId({id}: any) {
        this.id = id;
    }

    private _setTopPriority({topPriority}: any) {
        this.topPriority = topPriority;
    }

    private _setName({name}: any) {
        this.name = name;
    }

    private _setUrl({url}: any) {
        this.url = url;
    }

    private _setRightPriority({rightPriority}: any) {
        this.rightPriority = rightPriority;
    }

    private _setMenuItems({menuItems}: any) {
        this.menuItems = menuItems;
    }

}
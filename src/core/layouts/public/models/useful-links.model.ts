import {getFullDate} from '@/core/helpers/get-date';

export class UsefulLinksModel {
    public id: number | null = null;
    public orderNumber: number | null = null;
    public name: string = '';
    public url: string = '';
    public fileUrl: string = '';
    public fileAltText: string = '';

    constructor(data: any) {
        this._setId(data);
        this._setOrderNumber(data);
        this._setName(data);
        this._setUrl(data);
        this._setFileUrl(data);
        this._setFileAltText(data);
    }

    private _setId({id}: any) {
        this.id = id;
    }

    private _setOrderNumber({orderNumber}: any) {
        this.orderNumber = orderNumber;
    }

    private _setName({name}: any) {
        this.name = name;
    }

    private _setUrl({url}: any) {
        this.url = url;
    }

    private _setFileUrl({fileUrl}: any) {
        this.fileUrl = fileUrl;
    }

    private _setFileAltText({fileAltText}: any) {
        this.fileAltText = fileAltText;
    }

}
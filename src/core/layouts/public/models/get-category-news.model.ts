import {getFullDate} from "@/core/helpers/get-date";

export class GetCategoryNewsModel {
    public id: number | null = null;
    public orderNumber: string | null = null;
    public publishDate: string | null = null;
    public categoryName: string | null = null;
    public header: string | null = null;
    public slug: string | null = null;
    public fileUrl: string | null = null;
    public fileAltText: string | null = null;

    constructor(data: any) {
        this._setId(data);
        this._setOrderNumber(data);
        this._setCategoryName(data);
        this._setFileUrl(data);
        this._setFileAltText(data);
        this._setHeader(data);
        this._setSlug(data);
        this._setPublishDate(data);


    }

    private _setId({id}: any) {
        this.id = id;
    }

    private _setOrderNumber({orderNumber}: any) {
        this.orderNumber = orderNumber;
    }

    private _setCategoryName({categoryName}: any) {
        this.categoryName = categoryName;
    }

    private _setHeader({header}: any) {
        this.header = header;
    }

    private _setSlug({slug}: any) {
        this.slug = slug;
    }

    private _setFileUrl({fileUrl}: any) {
        this.fileUrl = fileUrl;
    }

    private _setFileAltText({fileAltText}: any) {
        this.fileAltText = fileAltText;
    }

    private _setPublishDate({publishDate}: any) {
        this.publishDate = getFullDate(publishDate);
    }


}
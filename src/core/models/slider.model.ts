export class SliderModel {
    public name: string = '';
    public description: string = '';
    public url: string = '';
    public fileUrl: string = '';
    public fileAltText: string = '';

    constructor(data: any) {
        this._setName(data);
        this._setDescription(data);
        this._setUrl(data);
        this._setFileUrl(data);
        this._setFileAltText(data);
    }

    private _setName({name}: any) {
        this.name = name;
    }

    private _setDescription({description}: any) {
        this.description = description;
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
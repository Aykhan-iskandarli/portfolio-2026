export class DropdownModel {
    public value: number |  null = null;
    public label: string  |  null = null;

    constructor(data: any) {
        this._setValue(data);
        this._setLabel(data);
    }

    private _setValue({id}: any) {
        this.value = id;
    }

    private _setLabel({name}: any) {
        this.label = name;
    }


}
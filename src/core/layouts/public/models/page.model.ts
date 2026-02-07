import { IPage } from '@/core/layouts/public/public';

export class PageModel {
  public id: number | null = null;
  public name: string = '';
  public url: string = '';
  public metaContent: string | null = null;
  public script: string = '';
  public title: string | null = null;
  public description: string | null = null;
  public titleDescription: string | null = null;
  public dynamicContents: IPage | undefined;

  constructor(data: any) {
    this._setId(data);
    this._setName(data);
    this._setUrl(data);
    this._setMetaContent(data);
    this._setScript(data);
    this._setTitle(data);
    this._setDescription(data);
    this._setTitleDescription(data);
    this._setDynamicContents(data);
  }

  private _setId({ id }: any) {
    this.id = id;
  }

  private _setName({ name }: any) {
    this.name = name;
  }

  private _setUrl({ url }: any) {
    this.url = url;
  }

  private _setMetaContent({ metaContent }: any) {
    this.metaContent = metaContent;
  }

  private _setScript({ script }: any) {
    this.script = script;
  }

  private _setTitle({ title }: any) {
    this.title = title;
  }

  private _setDescription({ description }: any) {
    this.description = description;
  }

  private _setTitleDescription({ titleDescription }: any) {
    this.titleDescription = titleDescription;
  }

  private _setDynamicContents({ dynamicContents }: any) {
    this.dynamicContents = dynamicContents;
  }
}

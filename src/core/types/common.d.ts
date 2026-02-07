export interface  IList <T> {
    items: T[];
    totalCount: number;
}

export interface  IPagination  {
    pageNumber: number ;
    pageSize: number ;
}

export interface  ISlider  {
    name: string;
    description: string;
    url: string;
    fileUrl: string;
    fileAltText: string;
}

type DynamicContentFile = {
    altText: string;
    fileUrl: string;
  };
  
  type ContentTranslation = {
    content: string;
    dynamicContentFile: DynamicContentFile;
  };
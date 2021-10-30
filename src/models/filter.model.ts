export class FilterModel {
    filter: string = "";
    offSet: number = 0;
    pageSize: number = 10;

    FilterModel(filter: string = '', offSet: number = 0, pageSize: number = 10) {
        filter = filter;
        offSet = offSet;
        pageSize = pageSize;
    }
 }

 export class FilterReviewModel {
    companyId: number = -1;
    filter: string = "";
    offSet: number = 0;
    pageSize: number = 10;

    FilterReviewModel(companyId: number = -1, filter: string = '', offSet: number = 0, pageSize: number = 10) {
        companyId = companyId;
        filter = filter;
        offSet = offSet;
        pageSize = pageSize;
    }
 }
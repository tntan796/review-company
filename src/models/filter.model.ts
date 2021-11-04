export class FilterModel {
    filter: string = "";
    offSet: number = 0;
    pageSize: number = 10;

    FilterModel(filter: string = '', offSet: number = 0, pageSize: number = 10) {
        this.filter = filter;
        this.offSet = offSet;
        this.pageSize = pageSize;
    }
 }

 export class FilterReviewModel {
    companyId: number = -1;
    filter: string = "";
    offSet: number = 0;
    pageSize: number = 10;

    FilterReviewModel(companyId: number = -1, filter: string = '', offSet: number = 0, pageSize: number = 10) {
        this.companyId = companyId;
        this.filter = filter;
        this.offSet = offSet;
        this.pageSize = pageSize;
    }
 }
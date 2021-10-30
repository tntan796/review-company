export class Review {
    Id = '';
    ParentId? = '';
    Created? = 0;
    UserName? = '';
    Comment? = '';
    IsFavourite? = '';
    Time? = '';
    Star? = '';
    CompanyId? = -1;
    Replies: Review[] = []
}
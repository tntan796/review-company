export class Review {
    Id? = '';
    ParentId?: string | null = '';
    Created? = 0;
    UserName? = '';
    Comment? = '';
    IsFavourite? = '';
    Time? = '';
    Star? : string | {name: string, code: string} = '';
    CompanyId?: number | null = -1;
    Favourite = 0;
    Replies?: Review[] = []
}
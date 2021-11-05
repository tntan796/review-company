import { ReviewActionType } from "../common/type";

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
    CompanyName? = '';
    Rating? = 0;
    Favourite?: ReviewActionType = ReviewActionType.like;
    Replies?: Review[] = []
}
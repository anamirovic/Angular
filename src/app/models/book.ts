export interface Book{
    id:number;
    title:string;
    author: string;
    price: number;
    viewsCount: number;
    rating: BookRating;
    link: string;
    imageurl: string;

}

export enum BookRating{
    None,
    Like,
    Dislike,
}
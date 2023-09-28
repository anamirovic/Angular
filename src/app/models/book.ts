export interface Book{
    id:number;
    title:string;
    author: string;
    price: number;
    available: number;
    rating: BookRating;
    imageurl: string;
    purchased: boolean;

}

export enum BookRating{
    None,
    Like,
    Dislike,
}
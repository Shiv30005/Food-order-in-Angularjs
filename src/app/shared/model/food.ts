export class Foods{
    [x: string]: any;
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean = false;
    star:number= 0;
    tags?:string[];
    ImageUrl!:string;
    cooktime!:string;
    origins!:string[];
}
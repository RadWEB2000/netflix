export interface IntContent {
    description:string;
    lang:string;
    path:string;
    rating:number|string;
    release:string;
    title:string;
}
export interface IntPoster {
    image:string;
    title:string;
}
export interface IntSearch extends IntContent,IntPoster {}
export interface IntContent {
    job:string;
    path:string;
    title:string;
    works:{
        first_air_date:string;
        media_type:string;
        name:string;
        title:string;
        release_date:string;
    }[]
}
export interface IntPoster {
    image:string;
    title:string;
}
export interface IntSearch extends IntContent,IntPoster {}
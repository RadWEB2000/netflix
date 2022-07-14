
export interface IntMovieResult {
    result:{
        id:number;
        original_language:string;
        overview:string;
        poster_path:string;
        release_date:string;
        title:string;
        vote_average:string;
    }[]
}
export interface IntTvResult {
    result:{
        first_air_date:string;
        id:number,
        original_language:string;
        overview:string;
        name:string;
        poster_path:string,
        vote_average:string;
    }[]
}
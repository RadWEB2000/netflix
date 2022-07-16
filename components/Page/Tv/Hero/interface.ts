import { IntCategories, IntCompanies, IntPoster } from "../../Movie/Hero/interface";

export interface IntInformations {
    end:string;
    homepage:string;
    lang:string;
    popularity:number;
    seasons:number;
    start:string;
    vote:number;
}
export interface IntContent extends IntInformations, IntCategories, IntCompanies {
    content:string;
    title:string;
}
export interface IntHero extends IntPoster,IntContent {}
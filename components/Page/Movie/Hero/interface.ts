export interface IntCategory {
    category:string;
}
export interface IntCategories {
    categories:{
        id:number,
        name:string,
    }[]
}
export interface IntCompany {
    country:string;
    image:string;
    title:string;
}

export interface IntCompanies {
    companies:{
        id:number,
        logo_path:string,
        name:string,
        origin_country:string,
    }[]
}

export interface IntContent extends IntCategories,IntCompanies,IntInformations{
    content:string,
    title:string,
}

export interface IntHero extends IntContent,IntPoster{}

export interface IntInformations{
    budget:number,
    homepage:string,
    lang:string,
    popularity:number,
    profit:number,
    release:string,
    vote:number,
}

export interface IntPoster {
    image:string;
    title:string;
}
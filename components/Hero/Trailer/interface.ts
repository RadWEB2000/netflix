export interface IntTrailer {
    movie:string;
}
export interface IntOptions {
    autoplay:boolean;
    controls:boolean;
    sources:IntSources[];
}

interface IntSources {
    src:string;
    type:string;
}
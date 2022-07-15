export interface IntPerson {
    character:string,
    image:string,
    title:string,
}
export interface IntCast {
    cast:{
        character:string,
        profile_path:string,
        name:string
    }[]
}
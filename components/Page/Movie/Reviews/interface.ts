export interface IntReview {
    content:string,
    fullname:string,
    image:string,
    release:string,
    username:string,
}

export interface IntReviews {
    reviews:{
        author_details:{
            name:string,
            username:string,
            avatar_path:string,
        },
        content:string,
        created_at:string,
    }[]
}
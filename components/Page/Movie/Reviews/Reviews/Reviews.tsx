import { data } from "../../../../SearchResult/data/data";
import { IntReviews } from "../interface";
import Review from "../Review/Review"
import { Wrapper } from "./styles";

const  Reviews = ({reviews}:IntReviews) => {
    const getImage = (image:string) => {
        if(image){
            if(image.includes('https://www.gravatar.com')){
                return `${image.substring(1)}`
            }else{
                return `${data.tmdb.image}${image}`
            }
        }else {
            return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        }
    }
    return(
        <Wrapper>
            {reviews.map(({author_details,content,created_at},key) => 
                <Review
                    content={content}
                    fullname={author_details.name}
                    image={getImage(author_details.avatar_path)}
                    release={created_at}
                    username={author_details.username}
                    key={key}
                />
            )}
        </Wrapper>
    )
}
export default Reviews;
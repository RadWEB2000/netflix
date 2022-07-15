import { IntReviews } from "../interface";
import Review from "../Review/Review"

const  Reviews = ({reviews}:IntReviews) => {
    return(
        <ul>
            {reviews.map(({author_details,content,created_at},key) => 
                <Review
                    content={content}
                    fullname={author_details.name}
                    image={author_details.avatar_path}
                    release={created_at}
                    username={author_details.username}
                    key={key}
                />
            )}
        </ul>
    )
}
export default Reviews;
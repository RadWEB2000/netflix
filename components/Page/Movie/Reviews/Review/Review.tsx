import Image from "next/image"
import { IntReview } from "../interface";
const Review = ({content,fullname,image,release,username}:IntReview) => {
    return(
        <li>
            <section>
                <div>
                    <div>
                        <figure>
                            <Image
                                alt={username}
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                src={image}
                                title={username}
                                quality={45}
                            />
                        </figure>
                        <div>
                            <h3>{username}</h3>
                            <h4>{fullname}</h4>
                        </div>
                    </div>
                    <div>
                        <p>{release}</p>
                    </div>
                </div>
                <article>
                    <p dangerouslySetInnerHTML={{__html:content}} />
                </article>
            </section>
        </li>
    )
}
export default Review;
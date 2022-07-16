import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout/Layout/Layout";
import Cast from "../../components/Page/Movie/Cast/Cast/Cast";
import Hero from "../../components/Page/Movie/Hero/Hero/Hero";
import Reviews from "../../components/Page/Movie/Reviews/Reviews/Reviews";
import Trailer from "../../components/Page/Movie/Trailer/Trailer/Trailer";
import { data } from "../../components/SearchResult/data/data";
import { IntMoviePage } from "../../types/interface";
const Page = ({cast,details,reviews,trailers}:IntMoviePage) => {
    console.log('rev',reviews)
    const heroPoster = () => {
        if(details.picture){
            return `${data.tmdb.image}${details.picture}`;
        }else{
            return `${data.tmdb.image}${details.poster}`;
        }
    }
    const getReviews = () => {
        reviews.map(({author_details}) => 
            <>
                username:{author_details.username}
            </>
        )
    }
    return(
        <Layout>
            <>
                <Hero
                    budget={details.budget}
                    categories={[...details.categories]}
                    companies={[...details.production]}
                    content={details.overview}
                    homepage={details.homepage}
                    image={heroPoster()}
                    lang={details.lang}
                    popularity={details.popularity}
                    profit={details.profit}
                    release={details.release}
                    title={details.title}
                    vote={details.vote}
                />
                <Trailer
                    trailers={[...trailers]}
                />
                <Cast
                    cast={[...cast]}
                />
                <Reviews
                    reviews={[...reviews]}
                />
            </>
        </Layout>
    )
}
export default Page;
export const getStaticProps:GetStaticProps = async ({params}) => {
    const details = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${data.tmdb.key}&language=en-US`).then(res => res.json())  
    const trailers = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${data.tmdb.key}`).then(res => res.json())

    const cast = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${data.tmdb.key}&language=en-US`).then(res => res.json())
    const reviews = await fetch(`https://api.themoviedb.org/3/movie//${params.id}/reviews?api_key=${data.tmdb.key}`).then(res => res.json())
    return {
        props:{
            details:{
                budget:details.budget,
                categories:details.genres,
                homepage:details.homepage,
                lang:details.original_language,
                overview:details.overview,
                picture:details.backdrop_path,
                poster:details.poster_path,
                popularity:details.popularity,
                production:details.production_companies,
                profit:details.revenue,
                release:details.release_date,
                title:details.title,
                vote:details.vote_average,
            },
            trailers:trailers.results,
            cast:cast.cast,
            reviews:reviews.results
        },
        revalidate:10,
    }
}
export const getStaticPaths:GetStaticPaths = async () => {
    return{
        paths:[],
        fallback:'blocking'
    }
}
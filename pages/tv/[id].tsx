import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout/Layout/Layout";
import Cast from "../../components/Page/Movie/Cast/Cast/Cast";
import Hero from "../../components/Page/Tv/Hero/Hero/Hero";
import Posters from "../../components/Page/Tv/Posters/Posters/Posters";
import { data } from "../../components/SearchResult/data/data";
import { IntTvPage } from "../../types/interface";
const Page = ({cast,details,posters}:IntTvPage) => {
    console.log('details',details)
    console.log('cast',cast)
    const heroPoster = ():string => {
        if(details.picture){
            return `${data.tmdb.image}${details.picture}`;
        }else{
            return `${data.tmdb.image}${details.poster}`;
        }
    }
    return(
        <Layout>
            <>
                <Hero
                    categories={[...details.categories]}
                    companies={[...details.companies]}
                    content={details.overview}
                    end={details.release.end}
                    homepage={details.homepage}
                    image={heroPoster()}
                    lang={details.lang}
                    popularity={details.popularity}
                    seasons={details.release.seasons}
                    start={details.release.start}
                    title={details.title}
                    vote={details.vote}
                />
                <Cast
                    cast={[...cast]}
                />
                <Posters
                    posters={[...posters]}
                />
            </>
        </Layout>
    )
}
export default Page;
export const getStaticProps:GetStaticProps = async ({params}) => {
    const details = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=${data.tmdb.key}&language=en-US`).then(res => res.json())
    const cast = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=${data.tmdb.key}&language=en-US`).then(res => res.json())
    const posters = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/images?api_key=${data.tmdb.key}`).then(res => res.json())
    return {
        props:{
            details:{
                categories:details.genres,
                companies:details.networks,
                homepage:details.homepage,
                lang:details.original_language,
                overview:details.overview,
                picture:details.backdrop_path,
                popularity:details.popularity,
                poster:details.poster_path,
                release:{
                    seasons:details.seasons.length,
                    start:details.first_air_date,
                    end:details.last_air_date
                },
                title:details.name,
                vote:details.vote_average,
            },
            cast:cast.cast,
            posters:posters.backdrops
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
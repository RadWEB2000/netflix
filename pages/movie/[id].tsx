import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout/Layout";
const Page = ({dog}) => {
    const moviePath = `https://image.tmdb.org/t/p/original`
    const {id} = useRouter().query;
    console.log('paths',dog)
    return(
        <Layout>
            <>
             {id}
            </>
        </Layout>
    )
}
export const getStaticProps = async () => {
    console.log('server')
    return {
        props:{
            dog:'reks',
        }
    }
}

export const getStaticPaths = async (id) => {
    const paths = id;
    console.log(paths)
    return{
        id
    }
}

export default Page;




// InferGetStaticPropsType









// const details = await fetch('https://api.themoviedb.org/3/movie/140607/details?api_key=c0f0775fea18b0469df241482ffee21b&language=en-US').then(res => res.json())
// console.log(details)
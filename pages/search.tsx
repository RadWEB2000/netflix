import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout/Layout";
import SearchBar from "../components/SearchBar/SearchBar/SearchBar";
import MovieResult from "../components/SearchResult/MovieResult";
import PersonResult from "../components/SearchResult/PersonResult";
import TvResult from "../components/SearchResult/TvResult";
import { fetchSearchTmdb, fetchTmdb, tmdb_api } from "../components/SearchResult/data/tmdb";
const Page:NextPage = () => {
    const [filter,setFilter] = useState({
        movie:true,
        tv:false,
        person:false
    })
    const filterRadios = {
        movie:{
            id:'movie',
            name:'movie',
            title:'Movie',
            handle:() => setFilter({movie:true,tv:false,person:false}),
            value:filter.movie
        },
        tv:{
            id:'tv',
            name:'tv',
            title:'Tv',
            handle:() => setFilter({movie:false,tv:true,person:false}),
            value:filter.tv
        },
        person:{
            id:'person',
            name:'person',
            title:'Person',
            handle:() => setFilter({movie:false,tv:false,person:true}),
            value:filter.person
        }
    }
    const [category,setCategory] = useState('')
    const getCategory = () => {
        if(filter.movie){
            setCategory('movie')
        }else if(filter.tv){
            setCategory('tv')
        }else if(filter.person){
            setCategory('person')
        }
    }
    const {movie,tv,person} = filterRadios;
    const [result,setResult] = useState<any>([]);
    const [search,setSearch] = useState('');
    useEffect(() => {
        getCategory()
    })
    useEffect(() => {
        setTimeout(() => fetchTmdb(category,setResult,search),1500)
    },[category,search])
    return(
        <Layout>
            <>
                <SearchBar
                    filterSearch={[movie,tv,person]}
                    handle={(e:any) => setSearch(e.target.value)}
                    id='search'
                    name='search'
                /> 
                {
                    filter.movie &&
                    <MovieResult
                        result={result}
                    />
                }
                {
                    filter.tv && 
                    <TvResult
                        result={result}
                    />
                }
                {
                    filter.person && 
                    <PersonResult
                        result={result}
                    />
                }
            </>
        </Layout>
    )
}
export default Page;
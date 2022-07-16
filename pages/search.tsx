import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout/Layout";
import SearchBar from "../components/SearchBar/SearchBar/SearchBar";
import MovieResult from "../components/SearchResult/MovieResult";
import PersonResult from "../components/SearchResult/PersonResult";
import TvResult from "../components/SearchResult/TvResult";
import { fetchSearchTmdb, fetchTmdb, tmdb_api } from "../components/SearchResult/data/tmdb";
const Page:NextPage = () => {
    const [search,setSearch] = useState('');
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
            handle:() => {setFilter({movie:true,tv:false,person:false}),setSearch('')},
            value:filter.movie
        },
        tv:{
            id:'tv',
            name:'tv',
            title:'Tv',
            handle:() => {setFilter({movie:false,tv:true,person:false}),setSearch('')},
            value:filter.tv
        },
        person:{
            id:'person',
            name:'person',
            title:'Person',
            handle:() => {setFilter({movie:false,tv:false,person:true}),setSearch('')},
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
    useEffect(() => {
        getCategory()
    })
    useEffect(() => {
        setTimeout(() => fetchTmdb(category,setResult,search),1500);
        console.log(
            'result',
            result.length
        )
        console.log(
            'search',
            search.length
        )
        console.log('category',category)
    },[category,result,search])
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
                    search.length > 0 ?
                    (
                        result.length > 1 ?
                        (
                            filter.movie &&
                            <MovieResult
                                result={result}
                            />
                        ) :
                        <>
                        </>
                    ) :
                    <>
                    </>
                }


                {
                    filter.tv && 
                    <TvResult
                        result={result}
                    />
                }
                {
                    <>
                        {
                            search.length > 0 ?
                            (
                                result.length > 0 ?
                                (
                                    filter.person && 
                                    <PersonResult
                                        result={result}
                                    />
                                ) :
                                <p>result nie ok</p>
                            ):
                            <p>search pusty</p>
                        }
                    </>
                }
            </>
        </Layout>
    )
}
export default Page;
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { fetchSearchTmdb, tmdb_api } from "../data/tmdb";

const Page:NextPage = () => {
    const [result,setResult] = useState<any>([]);
    const [search,setSearch] = useState('');
    console.log(search)
    return(
        <Layout>
            <>
                id               
            </>
        </Layout>
    )
}
export default Page;
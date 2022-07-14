export const tmdb_api = {
    search:`https://api.themoviedb.org/3/search/movie?api_key=c0f0775fea18b0469df241482ffee21b&language=en-US&query=`// dalej będzie zapytanie
}
export const fetchSearchTmdb = (api:string,getResult:any) => {
    fetch(api)
    .then(res => res.json())
    .then(res => getResult([...res.results]))
    .catch(err => err)
}

export const fetchTmdb = (category:string,getResult:any,query:string) => {
    fetch(`https://api.themoviedb.org/3/search/${category}?api_key=c0f0775fea18b0469df241482ffee21b&language=en-US&query=${query}`)
    .then(res => res.json())
    .then(res => getResult([...res.results]))
    .catch(err => err)
    .catch(err => console.log(err))
}

export const fetchTmdbMovie = (query:string,setMovieDetails:any,setMovieTrailer:any,setMovieReviews:any,setMovieCredits:any,setMovieSimilar:any,setMovieRecommendations:any) => {
    // details
    fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=c0f0775fea18b0469df241482ffee21b&language=en-US`)
    .then(res => res.json())
    .then(res => setMovieDetails({...res}))
    .catch(err => err)
    //  trailer
    fetch(`https://api.themoviedb.org/3/movie/${query}/videos?api_key=c0f0775fea18b0469df241482ffee21b&language=en-US`)
    .then(res => res.json())
    .then(res => setMovieTrailer(res.results.splice(0,4)))
    .catch(err => err)
    //  reviews
    fetch(`https://api.themoviedb.org/3/movie/${query}/reviews?api_key=c0f0775fea18b0469df241482ffee21b&language=en-US`)
    .then(res => res.json())
    .then(res => setMovieReviews(res.results))
    .catch(err => err)
    // credits
    fetch(`https://api.themoviedb.org/3/movie/${query}/credits?api_key=c0f0775fea18b0469df241482ffee21b&language=en-US`)
    .then(res => res.json())
    .then(res => setMovieCredits(res))
    .catch(err => err)
    // similar
    fetch(`https://api.themoviedb.org/3/movie/${query}/similar?api_key=c0f0775fea18b0469df241482ffee21b&language=en-US`)
    .then(res => res.json())
    .then(res => setMovieSimilar(res.results.splice(0,10)))
    .catch(err => err)
    // recommend
    fetch(`https://api.themoviedb.org/3/movie/${query}/recommendations?api_key=c0f0775fea18b0469df241482ffee21b&language=en-US`)
    .then(res => res.json())
    .then(res => setMovieRecommendations(res.results.splice(0,10)))
    .catch(err => err)
}
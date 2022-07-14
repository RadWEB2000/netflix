import Search from "../Cards/Actor/Search/Search/Search";

const PersonResult = ({result}:{result:any|any[]}) => {
    // const {name,profile_path,known_for,known_for_department} = result[0];
    console.log('id',typeof result[0]);
    return(
        <>
            {
                typeof result[0] === undefined ?
                <p>Nie znaleziono</p>  :
                <Search
                     image={`https://image.tmdb.org/t/p/original/${result[0].profile_path}`}
                     job={result[0].known_for_department}
                     title={result[0].name}
                     path=''
                     works={[...result[0].known_for]}
                 />
            }
           
        </>
    )
}
export default PersonResult;
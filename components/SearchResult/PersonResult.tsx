import Search from "../Cards/Actor/Search/Search/Search";

const PersonResult = ({result}:{result:any|any[]}) => {
    // const {name,profile_path,known_for,known_for_department} = result[0];
    console.log('id', result);
    return(
        <>
            {
                typeof result[0] === undefined ?
                <p>Nie znaleziono</p>  :
                (
                    result ?
                    <Search
                        image={result[0].profile_path ? `https://image.tmdb.org/t/p/original/${result[0].profile_path}` : 'https://cdn.pixabay.com/photo/2014/10/12/09/21/filmproduction-485518_960_720.jpg'}
                        job={result[0].known_for_department}
                        title={result[0].name}
                        path=''
                        works={result[0].known_for && [...result[0].known_for]}
                    /> :
                    <></>
                )
            }
           
        </>
    )
}
export default PersonResult;
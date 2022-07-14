export const fetchNetflix = (api,getResponse,options) => {
    fetch(api,options)
    .then((res) => res.json())
    .then((res) => getResponse([...res]))
    .catch(err => err)
}
export const fetchMoviesAppApi = (api,getResponse,options) => {
    fetch(api,options)
    .then((res) => res.json())
    .then((res) => getResponse([...res.results]))
    .catch(err => err)
}

export const fetchActors = (api,getResponse,options) => {
    fetch(api,options)
    .then((res) => res.json())
    .then((res) => getResponse([...res.Birthdays]))
    .catch(err => err)
}
export const fetchTwitter = (api,getResponse,options,person) => {
    const search = api + person;
    fetch(search,options)
    .then((res) => res.json())
    .then((res) => getResponse(res.profile_pic_url))
    .catch(err => err)
}

// 
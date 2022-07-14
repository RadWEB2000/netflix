const api = 'https://netflix-weekly-top-10.p.rapidapi.com/api/'
export const netflix = {
    api:{
        movie:`${api}movie`,
        tv:`${api}tv`,
    },
    options: {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f86844fde7msh1222695ea20d5e3p1a659bjsnd177be08e1cd',
            'X-RapidAPI-Host': 'netflix-weekly-top-10.p.rapidapi.com'
        }
    }
}

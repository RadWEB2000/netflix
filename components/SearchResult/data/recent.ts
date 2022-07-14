export const recent = {
    api:{
        movies:'https://movies-app1.p.rapidapi.com/api/movies?limit=5&sort=createdAt&type=movies',
        series:'https://movies-app1.p.rapidapi.com/api/movies?limit=5&sort=createdAt&type=series'
    },
    options:{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f86844fde7msh1222695ea20d5e3p1a659bjsnd177be08e1cd',
            'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
        }
    }
};
import { createSlice } from "@reduxjs/toolkit"

interface initialParts {
    id:string,
    title:string,
    image:string,
    path:string,
}

interface initial {
    movies:initialParts[],
    tv:initialParts[],
    persons:initialParts[],
}

const initial:initial = {
    movies:[
        {
            id:'',
            title:'',
            image:'',
            path:''
        },
    ],
    tv:[
        {
            id:'',
            title:'',
            image:'',
            path:''
        },
    ],
    persons:[
        {
            id:'',
            title:'',
            image:'',
            path:''
        },
    ]
}
export const favSlice = createSlice({
    name:'favs',
    initial,
    reducers:{}
})
export default favSlice.reducer;
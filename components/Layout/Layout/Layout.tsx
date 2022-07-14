import { ReactElement, useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { Global } from "../../../styles/Global"
import { theme } from "../../../styles/theme"
import Navigation from "../../Navigation/Navigation/Navigation"
const Layout = ({children}:{children:ReactElement}) => {
    const [search,setSearch] = useState('')
    const menu = [
        {
            path:'/',
            title:'Home'
        },
        {
            path:'/search',
            title:'Search'
        },
        {
            path:'',
            title:'Favourites'
        },
        {
            path:'',
            title:'About'
        },
    ]
    useEffect(() => {
        console.log(search);
    },[search])
    return(
        <ThemeProvider theme={theme}>
            <Global/>
            <Navigation
                image='/assets/images/netflix.png'
                menu={[...menu]}
                path='/'
                placeholder="Search"
                title="NetflixApp"
            />
            <>
                {children}
            </>
        </ThemeProvider>
    )
}
export default Layout;
import { ReactElement, useEffect, useState } from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import store from "../../../redux/store"
import { Global } from "../../../styles/Global"
import { theme } from "../../../styles/theme"
import Navigation from "../../Navigation/Navigation/Navigation"
const Layout = ({children}:{children:ReactElement}) => {
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
            path:'/favourites',
            title:'Favourites'
        },
        {
            path:'',
            title:'About'
        },
    ]
    console.log(store)
    return(
        <Provider store={store}>
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
        </Provider>
    )
}
export default Layout;
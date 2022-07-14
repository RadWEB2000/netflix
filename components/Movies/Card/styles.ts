import styled from 'styled-components';
export const Home = styled.li`
    background-image:linear-gradient(to top right,${({theme}) => theme.colors.brown},${({theme}) => theme.colors.red});
    flex-shrink:0;
    height:45rem;
    max-width:95%;
    position:relative;
    width:35rem;
    z-index:0;
    & > figure {
        filter:brightness(125%);
        height:100%;
        position:relative;
        user-select:none;
        transition:.15s linear filter;
        width:100%;
        z-index:0;
    }
    & > section {
        background-color:hsla(0,100%,0%,.85);
        color:${({theme}) => theme.colors.white};
        flex-flow:column;
        height:100%;
        justify-content:center;
        opacity:0;
        padding:.25rem .45rem;
        position:absolute;
        row-gap:1.5rem;
        top:0;
        transition:.15s linear opacity,.15s linear visibility;
        visibility:hidden;
        z-index:1;
        &,
        & > div,
        & > div > div,
        & > div > div{
            align-items:center;
            display:flex;
        }
        & > h2{
            color:${({theme}) => theme.colors.red};
            font-size:2.8rem;
            text-align:center;
            width:100%;
        }
        & > div{
            flex-flow:row wrap;
            justify-content:space-between;
            width:100%;
            & > div{
                & > * {
                    align-items:center;
                    display:flex;
                    justify-content:center;
                    padding:.45rem;
                }
                & > div{
                    font-size:1.8rem;
                    padding:.45rem;
                }
                & > p{
                    font-size:1.8rem;
                    font-weight:900;
                }
            }
        }
        & > p {
            font-size:1.8rem;
            font-weight:300;
            line-height:2;
            text-align:end;
        }
    }
    &:focus,
    &:hover{
        & > figure{
            filter:brightness(95%) saturate(85%);
        }
        & > section{
            opacity:1;
            visibility:visible;
        }
    }
    @media only screen {
        @media (max-width:300px){
            height:40rem;
        }
        @media (max-width:250px){
            & > section{
                & > h2{
                    font-size:2.45rem;
                }
                & > p{
                    font-size:1.55rem;
                    line-height:1.8;
                }
            }
        }
    }
`

export const Search = styled.header`
    display:grid;
    grid-template-columns:1.25fr 3fr;
    min-height:60rem;
    margin:.45rem auto;
    width:85%;
    & > figure{
        height:100%;
        position:relative;
        width:100%;
    }
    & > section {
        flex-flow:column;
        justify-content:flex-start;
        row-gap:1.1rem;
        &,
        & > *:not(div) {
            width:100%;
        }
        &,
        & > ul,
        & > ul > li ,
        & > ul > li > *{
            display:flex;
        }
        & > h2{
            color:${({theme}) => theme.colors.red};
            font-size:4.25rem;
            padding:.12rem .15rem;
            text-align:center;
        }
        & > ul {
            flex-flow:row nowrap;
            justify-content:space-between;
            padding:.2rem .25rem;
            & > li {
                height:4rem;
                & > span{
                    align-items:center;
                    font-size:2.5rem;
                    justify-content:center;
                    padding:0 .65rem;
                }
                & > p {
                    align-items:center;
                    font-size:2.1rem;
                    font-weight:700;
                    justify-content:center;
                    padding:0 .65rem;
                }
            }
        }
        & > p {
            font-weight:300;
            font-size:2.2rem;
            line-height:2.2;
            padding:.35rem 1.5rem;
            text-align:justify;
        }
        & > div{
            justify-content:flex-end;
            &,
            & > div ,
            & > div > *{
                align-items:center;
                display:flex;
            }
            & > div {
                background-color:${({theme}) => theme.colors.brown};
                color:${({theme}) => theme.colors.white};
                justify-content:center;
                height:4.85rem;
                & > * {
                    height:100%;
                    transition:.12s linear background-color,.12s linear color;
                    &:hover{
                        background-color:${({theme}) => theme.colors.white};
                        color:${({theme}) => theme.colors.black};
                    }
                }
                & > .fav{
                    cursor:pointer;
                    font-size:3.5rem;
                    justify-content:center;
                    width:4.5rem;
                }
                & > a {
                    font-size:2.5rem;
                    font-weight:800;
                    padding:0 .65rem;
                    user-select:none;
                }
            }
        }
    }
    @media only screen {
        @media (max-width:1450px){
            min-height:50rem;
            width:95%;
        }
        @media (max-width:1200px){
            grid-template-columns:1.5fr 2.75fr;
            & > section {
                row-gap:.85rem;
                & > h2{
                    font-size:4.25rem;
                    padding:.12rem .15rem;
                    text-align:center;
                }
                & > p {
                    line-height:1.8;
                }
            }
        }
        @media (max-width:1050px){
            grid-template-columns:1.65fr 2.5fr;
            & > section {
                & > h2{
                    font-size:3.25rem;
                }
                & > ul {
                    & > li {
                        height:3.5rem;
                        & > span{
                            font-size:2.25rem;
                        }
                        & > p {
                            font-size:1.8rem;
                        }
                    }
                }
                & > p {
                    font-size:2rem;
                    line-height:1.7;
                }
                & > div{
                    & > div {
                        height:4.55rem;
                        & > .fav{
                            font-size:3.25rem;
                            width:4.5rem;
                        }
                        & > a {
                            font-size:2.25rem;
                            font-weight:800;
                            padding:0 .65rem;
                        }
                    }
                }
            }
        }
        @media (max-width:750px){
            grid-template-columns:1.85fr 1.95fr;
            & > section {
                & > h2{
                    font-size:2.45rem;
                }
                & > ul {
                    & > li {
                        height:3rem;
                        & > span{
                            font-size:2.25rem;
                        }
                        & > p {
                            font-size:1.8rem;
                        }
                    }
                }
                & > p {
                    font-size:1.75rem;
                    line-height:1.6;
                    text-align:start;
                }
                & > div{
                    & > div {
                        height:3.85rem;
                        & > .fav{
                            font-size:2.25rem;
                        }
                        & > a {
                            font-size:1.85rem;
                            padding:0 .65rem;
                        }
                    }
                }
            }
        }
        @media (max-width:600px){
            display:flex;
            min-height:auto;
            flex-flow:column;
            width:85%;
            & > figure {
                aspect-ratio:4/3;
            }
        }
        @media (max-width:350px){
            width:95%;
        }
        @media (max-width:300px){
            & > section {
                & > h2{
                    font-size:1.95rem;
                }
                & > ul {
                    flex-flow:column;
                    & > li {
                        height:auto;
                        row-gap:.15rem;
                        & > span{
                            font-size:1.45rem;
                        }
                        & > p {
                            font-size:1.55rem;
                        }
                    }
                }
                & > p {
                    font-size:1.55rem;
                }
            }
        }
    }
`

export const Result = styled.li`
    background-image:linear-gradient(to top right,${({theme}) => theme.colors.brown},${({theme}) => theme.colors.red});
    margin:auto;
    height:35rem;
    max-width:95%;
    width:25rem;
    &,
    & > figure{
        position:relative;
    }
    & > *{
        height:100%;
        width:100%;
    }
    & > section {
        align-items:center;
        background-color:${({theme}) => theme.colors.brown};
        display:flex;
        flex-flow:column;
        justify-content:space-between;
        left:0;
        opacity:0;
        padding:1rem 0;
        position:absolute;
        top:0;
        transition:.2s linear opacity,.2s linear visibility;
        visibility:hidden;
        & > h3 {
            font-size:2.25rem;
            font-weight:400;
            line-height:1.2;
            padding:.45rem .75rem;
            text-align:center;
            width:100%;
        }
        & > div {
            flex-flow:row nowrap;
            height:3.5rem;
            &,
            & > * {
                align-items:center;
                display:flex;
                justify-content:center;
            }
            & > * {
                background-color:${({theme}) => theme.colors.white};
                color:${({theme}) => theme.colors.brown};
                height:100%;
                transition:.2s linear background-color,.2s linear color;
                &:hover{
                    background-color:${({theme}) => theme.colors.brown};
                    color:${({theme}) => theme.colors.white};
                }
            }
            & > .fav {
                cursor:pointer;
                font-size:2.5rem;
                width:3.5rem;
            }
            & > a{
                font-weight:900;
                padding:0 .65rem;
                user-select:none;
            }
        }
    }
    &:focus,
    &:hover{
        & > section{
            opacity:1;
            visibility:visible;
        }
    }
    @media only screen {
        @media (max-width:300px){
            height:30rem;
        }
    }
`

export const ResultWrapper = styled.section`
    align-items:center;
    display:flex;
    flex-flow:row wrap;
    gap:.85rem;
    justify-content:center;
    margin:3rem auto;
    width:90%;
`
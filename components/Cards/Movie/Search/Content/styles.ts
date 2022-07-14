import styled from 'styled-components';
export const Wrapper = styled.section`
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
    @media only screen {
        @media (max-width:1200px){
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
        @media (max-width:1050px){
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
        @media (max-width:750px){
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
        @media (max-width:300px){
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
`
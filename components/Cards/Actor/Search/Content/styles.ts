import styled from 'styled-components';
export const Wrapper = styled.section`
    justify-content:flex-start;
    row-gap:1rem;
    &,
    & > ul{
        align-items:center;
        display:flex;
        flex-flow:column;
    }
    & > h1,
    & > p {
        text-align:center;
        width:100%;
    }
    & > h1 {
        color:${({theme}) => theme.colors.red};
        font-size:5rem;
    }
    & > p {
        color:${({theme}) => theme.colors.brown};
        filter:brightness(140%);
        font-size:3.25rem;
    }
    & > ul {
        justify-content:center;
        row-gap:.85rem;
        &,
        & > li,
        & > * {
            width:100%;
        }
        & > li{
            text-align:center;
            & > h4{
                color:${({theme}) => theme.colors.white};
                font-size:2.8rem;
            }
            & > p {
                color:${({theme}) => theme.colors.white};
                opacity:.65;
                font-size:1.8rem;
            }
        }
    }
    & > div{
        justify-content:flex-end;
        width:100%;
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
        @media (max-width:1450px){
            & > h1 {
                font-size:4rem;
            }
            & > p {
                font-size:2.85rem;
            }
            & > ul {
                & > li{
                    & > h4{
                        font-size:2.2rem;
                    }
                    & > p {
                        font-size:1.7rem;
                    }
                }
            }
            & > div{
                & > div {
                    height:4.85rem;
                    & > .fav{
                        font-size:3.15rem;
                        width:4.5rem;
                    }
                    & > a {
                        font-size:2.25rem;
                    }
                }
            }
        }
        @media (max-width:900px){
            & > h1 {
                font-size:3rem;
            }
            & > p {
                font-size:2.45rem;
            }
            & > ul {
                & > li{
                    & > h4{
                        font-size:2rem;
                    }
                    & > p {
                        font-size:1.7rem;
                    }
                }
            }
            & > div{
                & > div {
                    height:4rem;
                    & > .fav{
                        font-size:2.45rem;
                        width:4.5rem;
                    }
                    & > a {
                        font-size:1.75rem;
                    }
                }
            }
        }
        @media (max-width:600px){
            & > h1 {
                font-size:3rem;
            }
            & > p {
                font-size:2.45rem;
            }
            & > ul {
                & > li{
                    & > h4{
                        font-size:2rem;
                    }
                    & > p {
                        font-size:1.7rem;
                    }
                }
            }
            & > div{
                justify-content:center;
                & > div {
                    height:4rem;
                    & > .fav{
                        font-size:2.45rem;
                        width:4.5rem;
                    }
                    & > a {
                        font-size:1.75rem;
                    }
                }
            }
        }
    }
`
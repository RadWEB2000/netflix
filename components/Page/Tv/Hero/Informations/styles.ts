import styled from 'styled-components';
export const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 2fr;
    user-select:none;
    & > * ,
    & > ul > .action,
    & > ul > .action > *{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > ul{
        flex-flow:row wrap;
        gap:.85rem;
        & > .action{
            font-size:2.5rem;
            font-weight:900;
            height:3.5rem;
            width:3.5rem;
            &.homepage,
            &.like{
                cursor:pointer;
            }
            & > * {
                color:${({theme}) => theme.colors.white};
                margin:auto;
                transition:.15s linear color;
            }
        }
        & > .like:hover,
        & > .homepage:hover{
            & > * {
                color:${({theme}) => theme.colors.red};
            }
        }
    }
    & > div{
        flex-flow:row;
        row-gap:2rem;
        text-align:center;
        & > ul{
            display:flex;
            flex-flow:row;
            justify-content:space-evenly;
            width:100%;
            & > .stat{
                & > .icon{
                    align-items:center;
                    font-size:2.25rem;
                    height:3rem;
                    justify-content:center;
                }
                & > p{
                    line-height:1.3;
                    font-size:1.8rem;
                }
            }
            & > .finanse{
                & > p {
                    font-weight:800;
                    line-height:1.3;
                }
            }
        }
    }
    @media only screen{
        @media (max-width:1050px){
            grid-template-columns:.5fr 2.5fr;
        }
        @media (max-width:930px){
            grid-template-columns:1fr 2.5fr;
            & > ul{
                flex-flow:column;
            }
            & > div{
                flex-flow:column;
            }
        }
        @media (max-width:350px){
            grid-template-columns:1fr;
            row-gap:.65rem;
            & > ul{
                flex-flow:row;
                & > * {
                    margin:auto;
                }
            }
            & > div{
                flex-flow:column;
                & > ul > * {
                    margin:auto;
                }
                & > ul {
                    flex-flow:column;
                    row-gap:.45rem;
                }
            }
        }
    }
`
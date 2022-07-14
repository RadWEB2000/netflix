import styled from 'styled-components';
export const Wrapper = styled.li`
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
import styled from 'styled-components';
export const Wrapper = styled.li`
    background-image:linear-gradient(to top right,${({theme}) => theme.colors.brown},${({theme}) => theme.colors.red});
    flex-shrink:0;
    height:45rem;
    max-width:95%;
    position:relative;
    width:36rem;
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
        align-items:center;
        display:flex;
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
        & > h2{
            color:${({theme}) => theme.colors.red};
            font-size:2.8rem;
            text-align:center;
            width:100%;
        }
        & > p {
            font-size:1.8rem;
            font-weight:300;
            line-height:2;
            text-align:center;
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
        @media (max-width:1450px){
            width:30rem;
        }
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
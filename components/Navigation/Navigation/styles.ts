import styled from 'styled-components';
export const Wrapper = styled.nav`
    position:sticky;
    top:0;
    z-index:999;
    &.desktop{
        background:${({theme}) => theme.colors.black};
        height:5rem;
        &,
        & > div:first-of-type{
            align-items:center;
            display:flex;
            flex-flow:row nowrap;
            justify-content:space-between;
        }
        @media only screen {
            @media (max-width:700px){
                min-height:5rem;
                height:auto;
                flex-flow:column;
                & > * {
                    width:100%;
                }
                & > div{
                    height:4rem;
                }
            }
            @media (max-width:500px){
                display:none;
            }
        }
    }
    &.mobile{
        background:${({theme}) => theme.colors.white};
        & > div{
            align-items:center;
            display:flex;
            &:first-of-type{
                flex-flow:row nowrap;
                justify-content:space-between;
                min-height:4.5rem;
                padding:0 .15rem;
                width:100%;
            }
            &:last-of-type > div{
                flex-flow:row-reverse;
                justify-content:space-between;
                padding:.45rem .15rem;
                row-gap:.85rem;
                width:100%;
            }
        }
        @media only screen {
            @media (min-width:500.5px){
                display:none;
            }
            @media (max-width:470px){
                & > div{
                    &:last-of-type > div{
                        flex-flow:column;
                    }
                }
            }
        }
    }
    /* background-color:red; */
    
`
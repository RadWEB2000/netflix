import styled from 'styled-components';
export const Wrapper = styled.li`
    display:flex;
    flex-flow:row;
    & > div{
        align-items:center;
        display:flex;
        min-height:8rem;
        justify-content:center;
        width:8rem;
        & > p {
            color:${({theme}) => theme.colors.brown};
            font-family:${({theme}) => theme.fonts.family.heading};
            font-size:6rem;
            &::first-letter{
                color:${({theme}) => theme.colors.gray};
            }
        }
    }
    & > section {
        display:flex;
        flex-flow:column;
        justify-content:center;
        row-gap:.12rem;
        width:25rem;
        & > * {
            width:100%;
        }
        & > h3{
            color:${({theme}) => theme.colors.red};
            font-size:2.4rem;
            font-weight:500;
            padding:.12rem;
        }
        & > div{
            column-gap:.15rem;
            &,
            & > * {
                align-items:center;
                display:flex;
                justify-content:center;
            }
            & > span{
                font-size:2rem;
                height:3rem;
                width:3rem;
            }
            & > p {
                font-size:1.65rem;
                font-weight:900;
                height:3rem;
            }
        }
    }
    &:last-of-type{
        & > div{
            & > p {
                color:${({theme}) => theme.colors.gray};
                &::first-letter{
                    color:${({theme}) => theme.colors.brown};
                }
            }
        }
    }

    @media only screen {
        @media (max-width:400px){
            & > div{
                width:5rem;
                & > p {
                    font-size:4rem;
                }
            }
            & > section{
                & > h3{
                    font-size:1.7rem;
                }
            }
        }
        @media (max-width:300px){
            & > div{
                display:none;
            }
            & > section{
                & > h3{
                    font-size:1.8rem;
                    text-align:center !important;
                }
            }
        }
    }
`
import styled from 'styled-components';
export const Wrapper = styled.div`
    display:grid;
    grid-template-columns:2.5fr 4fr;
    height:100%;
    position:absolute;
    width:100%;
    z-index:1;
    & > section{
        align-items:start;
        flex-flow:column;
        justify-content:center;
        font-family:${({theme}) => theme.fonts.family.regular};
        margin:0 auto;
        width:85%;
        &,
        & > ul{
            display:flex;
        }
        & > * {
            width:100%;
        }
        & > h1{
            font-family:${({theme}) => theme.fonts.family.heading};
            font-size:7.5rem;
            line-height:1.2;

        }
        & > p{
            font-size:1.8rem;
            font-weight:400;
            line-height:1.8;
            padding:.75rem;
        }
        & > ul{
            flex-flow:row wrap;
            gap:.85rem;
            justify-content:flex-start;
            & > .button{
                & > button {
                    border-radius:.65rem;
                    flex-flow:row nowrap;
                    justify-content:flex-start;
                    transition:.2s linear transform;
                    &,
                    & > div,
                    & > p{
                        align-items:center;
                        display:flex;
                    }
                    & > div{
                        font-size:2.15rem;
                        justify-content:center;
                        height:4.5rem;
                        width:4.5rem;
                    }   
                    & > p {
                        font-size:2rem;
                        font-weight:900;
                        height:4.5rem;
                        padding:0 1.5rem 0 .65rem;
                    }
                    &:focus,
                    &:hover{
                        transform:scale(.98);
                    }
                }
            }
            & > .movie{
                & > button{
                    background-color:${({theme}) => theme.colors.white};
                    color:${({theme}) => theme.colors.black};
                }
            }
            & > .modal{
                & > button{
                    background-color:${({theme}) => theme.colors.gray};
                    color:${({theme}) => theme.colors.white};
                }
            }
        }
    }
    @media only screen {
        @media (max-width:750px){
            & > section{
                grid-column:1/-1;
                & > p{
                    font-weight:700;
                }
            }
        }
        @media (max-width:350px){
            & > section{
                grid-column:1/-1;
                & > h1{
                    font-size:5rem;
                }
                & > p{
                    font-size:1.7rem;
                    padding:.45rem;
                }
            }
        }
    }
`
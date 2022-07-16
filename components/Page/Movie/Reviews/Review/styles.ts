import styled from 'styled-components';
export const Wrapper = styled.li`
    width:100%;
    & > section{
        align-items:center;
        background-color:${({theme}) => theme.colors.white};
        border-radius:1.7rem;
        color:${({theme}) => theme.colors.black};
        display:flex;
        flex-flow:column;
        justify-content:flex-start;
        padding:.85rem 1.25rem;
        row-gap:.35rem;
        & > * {
            width:100%;
        }
        & > .head{
            flex-flow:row;
            justify-content:space-between;
            &,
            & > * ,
            & > *  > div{
                align-items:center;
                display:flex;
            }
            & > .person{
                gap:.45rem;
                & > figure{
                    border-radius:50%;
                    filter:saturate(10%);
                    height:5rem;
                    overflow:hidden;
                    position:relative;
                    width:5rem;
                }
                & > div{
                    align-items:center;
                    height:100%;
                    justify-content:center;
                    flex-flow:row wrap;
                    gap:.5rem;
                    & > * {
                        line-height:1.5;
                        text-align:start;
                    }
                    & > h3{
                        color:${({theme}) => theme.colors.red};
                        font-size:2.1rem;
                    }
                    & > h4{
                        color:${({theme}) => theme.colors.gray};
                        font-size:1.5rem;
                    }
                }
            }
            & > .release{
                font-size:1.75rem;
                font-weight:900;
            }
        }
        & > article{
            padding:.45rem;
            display:inline-block;
            & > p {
                font-size:1.65rem;
                line-height:1.4;
                text-align:justify;
            }
        }
        & > .more{
            justify-content:flex-end;
            &,
            & > * {
                align-items:center;
                display:flex;
            }
            & > button{
                color:${({theme}) => theme.colors.black};
                font-size:2.35rem;
                font-weight:900;
                position:relative;
                transition:.15s linear color;
                &::before{
                    background-color:${({theme}) => theme.colors.gray};
                    bottom:0;
                    border-radius:.5rem;
                    height:.4rem;
                    left:50%;
                    transform:translateX(-50%);
                    transition:.15s linear background-color,.15s linear width;
                    width:100%;
                }
                &:hover{
                    color:${({theme}) => theme.colors.red};
                    &::before{
                        background-color:${({theme}) => theme.colors.brown};
                        width:95%;
                    }
                }
            }
        }
    }
    @media only screen {
        @media (max-width:700px){
            & > section {
                & > .head {
                    & > .person{
                        & > div{
                            align-items:flex-start;
                            flex-flow:column;
                            gap:.15rem;
                            & > * {
                                line-height:1.25;
                            }
                            & > h3{
                                font-size:1.7rem;
                            }
                            & > h4{
                                font-size:1.45rem;
                            }
                        }
                    }
                    & > .release{
                        font-size:1.55rem;
                        font-weight:700;
                    }
                }
                & > article{
                    padding:.25rem;
                    & > p {
                        font-size:1.45rem;
                        line-height:1.3;
                    }
                }
                & > .more{
                    & > button{
                        font-size:1.95rem;
                        &::before{
                            height:.3rem;
                        }
                    }
                }
            }
        }
        @media (max-width:700px){
            & > section {
                & > .head {
                    flex-flow:column;
                    justify-content:center;
                    gap:.25rem;
                }
            }
        }
    }
`
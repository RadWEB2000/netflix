import styled from 'styled-components';
export const Wrapper = styled.div`
    align-items:center;
    background-color:hsla(0,100%,0%,.35);
    display:flex;
    height:100vh;
    justify-content:center;
    left:50%;
    position:fixed;
    top:50%;
    transform:translate(-50%,-50%);
    z-index:999;
    width:100vw;
    & > .box {
        background-color:${({theme}) => theme.colors.white};
        border-radius:.75rem;
        box-shadow:0 0 1rem .25rem hsla(0,100%,0%,.35);
        color:${({theme}) => theme.colors.black};
        max-height:92%;
        max-width:99%;
        padding:.25rem .85rem;
        width:60rem;
        & > div{
            justify-content:flex-end;
            margin:1.15rem auto;
            &,
            & > .close{
                align-items:center;
                display:flex;
            }
            & > .close{
                cursor:pointer;
                height:3.75rem;
                justify-content:center;
                width:3.75rem;
                & > * {
                    color:${({theme}) => theme.colors.gray};
                    font-size:3.5rem;
                    transition:.15s linear color, .15s linear transform;
                }
                &:hover{
                    & > * {
                        color:${({theme}) => theme.colors.red};
                        transform:scale(.85);
                    }
                }
            }
        }
        & > section{
            flex-flow:column;
            margin:.15rem auto 1.15rem;
            row-gap:.65rem;
            user-select:none;
            &,
            & > div,
            & > div > ul{
                align-items:center;
                display:flex;
                justify-content:center;
            }
            & > * {
                width:100%;
            }
            & > h2{
                color:${({theme}) => theme.colors.red};
                font-size:4.5rem;
                text-align:center;
                text-transform:uppercase;
            }
            & > div{
                color:${({theme}) => theme.colors.brown};
                justify-content:space-between;
                flex-flow:row wrap;
                padding:0 .45rem;
                & > p {
                    font-size:2rem;
                    font-weight:900;
                }
                & > ul {
                    flex-flow:row;
                    & > .star{
                        align-items:center;
                        display:flex;
                        font-size:2.5rem;
                        height:2.8rem;
                        justify-content:center;
                        width:2.8rem;
                    }
                }               
            }
            & > p{
                color:${({theme}) => theme.colors.black};
                font-size:1.85rem;
                line-height:1.7;
                padding:.65rem;
            }
        }
    }
    @media only screen {
        @media (max-width:500px){
            & > .box{
                & > section {
                    & > h2{
                        font-size:3rem;
                    }
                    & > div{
                        justify-content:center;
                    }
                    & > p{
                        font-size:1.6rem;
                        line-height:1.6;
                        padding:.15rem;
                        text-align:center;
                    }
                }
            }
        }
    }

`
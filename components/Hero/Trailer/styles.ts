import styled from 'styled-components';
export const Wrapper = styled.div`
    background-color:hsla(0,100%,0%,1);
    flex-flow:column;
    height:100vh;
    left:50%;
    position:fixed;
    top:50%;
    transform:translate(-50%,-50%);
    z-index:999;
    width:100vw;
    &,
    & > * {
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > * {
        width:100%;
    }
    & > figure{
        background:yellow;
        position:relative;
        height:100%;
        width:95%;
        & > video {
            aspect-ratio:16/9;
            margin:auto;
            max-height:calc(100vh - 5rem);
            width:100%;
        }
    }
    & > .controls {
        background:${({theme}) => theme.colors.black};
        bottom:0;
        flex-flow:column;
        left:0;
        padding:0 1rem;
        position:absolute;
        &,
        & > .buttons{
            align-items:center;
            display:flex;
            justify-content:flex-start;
        }
        & > .progress{
            align-items:center;
            display:flex;
            height:.85rem;
            justify-content:flex-start;
            width:100%;
            & > .bar{
                background-color:${({theme}) => theme.colors.red};
                border-radius:2rem;
                display:flex;
                height:.45rem;
                transition:133.8s linear width;
                transition:.8s linear width;
                width:0%;
            }
            &:hover{
                & > .bar{
                    width:100%;
                }
            }
        }
        & > .buttons{
            flex-flow:row;
            column-gap:.85rem;
            width:100%;
            & > .button{
                align-items:center;
                color:${({theme}) => theme.colors.white};
                cursor:pointer;
                display:flex;
                font-size:3rem;
                height:3.5rem;
                justify-content:center;
                transition:.2s linear color;
                width:3.5rem;
                &:hover{
                    color:${({theme}) => theme.colors.red};
                }
            }
        }
    }
`
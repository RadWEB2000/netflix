import styled from 'styled-components';
export const Wrapper = styled.section`
    margin:1.5rem auto;
    width:85%;
    & > ul {
        align-items:center;
        background-color:#222;
        box-shadow:inset 0 0 2rem hsla(0,100%,0%,.85);
        display:flex;
        flex-flow:row wrap;
        padding:3rem .25rem;
        justify-content:center;
        & > * {
            margin:auto;
        }
    }
    & > h2{
        font-size:7rem;
        padding:0 .65rem;
    }
    & > div{
        padding:.25rem .15rem;
        &,
        & > button{
            align-items:center;
            display:flex;
            justify-content:center;
        }
        & > button{
            background-color:${({theme}) => theme.colors.brown};
            border-radius:1rem;
            color:${({theme}) => theme.colors.white};
            font-size:3rem;
            font-weight:900;
            line-height:2;
            text-transform:uppercase;
            transition:.15s linear background-color,.15s linear transform;
            width:15rem;
            &:hover{
                background-color:${({theme}) => theme.colors.red};
                transform:scaleX(.95);
            }
        }
    }
`
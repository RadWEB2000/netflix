import styled from 'styled-components';
export const Wrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:flex-start;
    width:100%;
    & > input {
        background-color:${({theme}) => theme.colors.gray};
        color:hsla(0,100%,100%,.85);
        font-size:2rem;
        height:4.5rem;
        max-width:99%;
        text-indent:2rem;
        transition:.15s linear background-color,.15s linear color;
        width:55rem;
        &:hover,
        &:focus{
            background-color:${({theme}) => theme.colors.white};
            color:${({theme}) => theme.colors.gray};
        }
        &::placeholder{
            color:hsla(0,100%,100%,.65);
            text-align:center;
        }
        &::selection{
            background-color:${({theme}) => theme.colors.red};
            color:${({theme}) => theme.colors.white};
        }
    }
`
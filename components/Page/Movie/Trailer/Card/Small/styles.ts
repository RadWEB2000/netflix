import styled from 'styled-components';
export const Wrapper = styled.figure`
    align-items:center;
    aspect-ratio:16/9;
    display:flex;
    justify-content:center;
    margin:auto;
    position:relative;
    width:100%;
    & > iframe{
        height:100%;
        object-fit:cover;
        object-position:center;
        width:100%;
    }
`   
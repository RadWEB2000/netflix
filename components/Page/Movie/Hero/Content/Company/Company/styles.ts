import styled from 'styled-components';
export const Wrapper = styled.li`
    align-items:center;
    display:flex;
    flex-flow:column;
    justify-content:flex-start;
    max-width:95%;
    user-select:none;
    width:13rem;
    & > figure{
        filter:grayscale(100%) invert(1);
        aspect-ratio:1/1;
        position:relative;
        user-select:none;
        width:100%;
    }
    & > figcaption{
        font-size:1.65rem;
        font-weight:900;
        text-align:center;
    }
`
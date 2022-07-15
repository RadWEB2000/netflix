import styled from 'styled-components';
export const Wrapper = styled.figure`
    height:100%;
    position:relative;
    width:100%;
    @media only screen{
        @media (max-width:620px){
            aspect-ratio:4/3;
            height:auto;
        }
    }
`
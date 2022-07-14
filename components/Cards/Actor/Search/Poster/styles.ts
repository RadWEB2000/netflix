import styled from 'styled-components';
export const Wrapper = styled.figure`
    height:100%;
    position:relative;
    width:100%;
    @media only screen {
        @media (max-width:600px){
            aspect-ratio:4/3;
            height:auto;
            max-width:99%;
            width:25rem;
        }
    }
`
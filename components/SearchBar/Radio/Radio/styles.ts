import styled from 'styled-components';
export const Wrapper = styled.div`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-around;
    @media only screen {
        @media (max-width:440px){
            flex-flow:row wrap;
            justify-content:center;
        }
    }
`
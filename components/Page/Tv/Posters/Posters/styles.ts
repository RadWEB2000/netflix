import styled from 'styled-components';
export const Wrapper = styled.section`
    width:95%;
    margin:2rem auto;
    & > ul{
        display:grid;
        gap:.25rem;
        grid-template-columns:repeat(4,1fr);
    }
    @media only screen{
        @media (max-width:1450px){
            & > ul{
                grid-template-columns:repeat(3,1fr);
            }       
        }
        @media (max-width:700px){
            & > ul{
                grid-template-columns:repeat(2,1fr);
            }       
        }
        @media (max-width:400px){
            & > ul{
                grid-template-columns:repeat(1,1fr);
            }       
        }
    }
`
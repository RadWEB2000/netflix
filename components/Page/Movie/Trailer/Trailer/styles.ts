import styled from 'styled-components';
export const Wrapper = styled.div`
    margin:1.5rem auto;
    width:85%;
    & > * {
        display:grid;
        margin:.25rem auto;
    }
    & > .big{
        gap:.15rem;
        grid-template-columns:repeat(2,1fr);
    }
    & > .small{
        gap:.25rem;
        grid-template-columns:repeat(4,1fr);
    }
    @media only screen{
        @media (max-width:1130px){
            width:90%;
        }
        @media (max-width:1000px){
            & > .small{
                grid-template-columns:repeat(3,1fr);
            }
        }
        @media (max-width:900px){
            & > .big{
                gap:.45rem;
                grid-template-columns:repeat(1,1fr);
            }
        }
        @media (max-width:700px){
            & > .big{
                grid-template-columns:repeat(1,1fr);
            }
            & > .small{
                grid-template-columns:repeat(2,1fr);
            }
        }
        @media (max-width:450px){
            & > .small{
                grid-template-columns:repeat(1,1fr);
            }
        }
    }
`
import styled from 'styled-components';
export const Wrapper  = styled.section`
    display:grid;
    margin:auto;
    width:75%;
    & > div {
        & > h2{
            color:${({theme}) => theme.colors.white};
            filter:brightness(85%);
            font-family:${({theme}) => theme.fonts.family.heading};
            font-size:4.5rem;
            letter-spacing:.55rem;
            text-align:center;
        }
    }
    & > ul {
        align-items:center;
        display:flex;
        flex-flow:column;
        justify-content:flex-start;
        row-gap:.85rem;
    }
    &:nth-of-type(1){
        grid-template-columns:1fr 2fr;
        & > div{
            grid-column:1;
        }
        & > ul {
            grid-column:2;
            align-items:flex-end;
            & > li {
                & > div {
                    order:1;
                }
                & > section {
                    order:2;
                    & > h3 {
                        text-align:end;
                    }
                }
            }
        }
    }
    &:nth-of-type(2){
        grid-template-columns:2fr 1fr;
        & > div{
            grid-column:-1;
        }
        & > ul {
            grid-column:1;
            align-items:flex-start;
            & > li {
                & > div {
                    order:2;
                }
                & > section {
                    order:1;
                    & > h3 {
                        text-align:start;
                    }
                }
            }
        }
    }

    @media only screen {
        @media (max-width:1350px){
            width:85%;
        }
        @media (max-width:1100px){
            width:90%;
        }
        @media (max-width:1000px){
            margin:3rem auto;
        }
        @media (max-width:600px){
            align-items:center;
            display:flex;
            flex-flow:column;
            justify-content:center;
        }
        @media (max-width:400px){
            margin:1.5rem auto;
            width:98%;
        }
    }
`
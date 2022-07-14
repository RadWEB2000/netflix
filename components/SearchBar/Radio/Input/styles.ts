import styled from 'styled-components';
export const Wrapper = styled.div`
    flex-flow:row nowrap;
    &,
    & > label,
    & > label > *{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > input {
        opacity:0;
        visibility:hidden;
    }
    & > label{
        cursor:pointer;
        flex-flow:row nowrap;
        user-select:none;
        & > .checkbox{
            background-color:${({theme}) => theme.colors.white};
            height:1.5rem;
            width:1.5rem;
            &,
            & > .check {
                border-radius:50%;
            }
            & > .check{
                background:aqua;
                background-color:${({theme}) => theme.colors.red};
                margin:auto;
                height:.75rem;
                width:.75rem;
            }
        }
        & > p {
            color:${({theme}) => theme.colors.white};
            font-weight:900;
            padding:0 .85rem;
            text-transform:uppercase;
            transition:.2s linear color;
        }
    }
    &:hover{
        & > label{
            & > p {
                color:${({theme}) => theme.colors.red};
            }
        }
    }
`
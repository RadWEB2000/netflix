
import { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    ::after,
    ::before{
        content:'';
        position:absolute;
    }
    ::selection{
        background-color:${({theme}) => theme.colors.white};
        color:${({theme}) => theme.colors.red};
    }
    a{
        color:inherit;
        outline:none;
        text-decoration:none;
    }
    body{
        background-color:${({theme}) => theme.colors.black};
        color:${({theme}) => theme.colors.white};
        font-family:${({theme}) => theme.fonts.family.regular};
        font-size:1.6rem;
    }
    button{
        all:unset;
        cursor:pointer;
    }
    html{
        font-size:62.5%;
    }
    input{
        all:unset;
    }
    li,
    ol,
    ul{
        list-style:none;
    }

`
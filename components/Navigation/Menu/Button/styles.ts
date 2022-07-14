import styled, { css } from 'styled-components';
import { IntWrapper } from './interface';
export const Wrapper = styled.div<IntWrapper>`
    align-items:center;
    cursor:pointer;
    display:flex;
    flex-flow:column;
    height:3.15rem;
    justify-content:space-around;
    order:2;
    overflow:hidden;
    padding:.15rem;
    position:relative;
    width:3.15rem;
    & > span{
        background-color:${({theme}) => theme.colors.gray};
        height:.32rem;
        transition:.15s linear background-color,.15s linear transform,.15s linear width;
        width:100%;
    }
    &:hover{
        & > span{
            background-color:${({theme}) => theme.colors.black};
        }
    }
    ${({active}) => active && css`
        & > span{
            background-color:${({theme}) => theme.colors.red} !important;
            position:absolute;
            top:50%;
            left:50%;
            &:first-of-type{
                transform:translate(-50%,-50%) rotate(45deg);
            }
            &:last-of-type{
                transform:translate(-50%,-50%) rotate(-45deg);
            }
        }
    `}
`
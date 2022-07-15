import styled from 'styled-components';
export const Wrapper = styled.li`
    & > p {
        color:${({theme}) => theme.colors.red};
        filter:brightness(120%);
        font-size:1.65rem;
        font-weight:800;
        line-height:1.6;
        user-select:none;
    }
`
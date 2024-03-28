import styled from 'styled-components';
import { media } from '../Theme/constants';

export const Container = styled.div`
    border: 3px solid ${({ theme }) => theme.colors.mainColor};
    width: fit-content;
    border-radius: 65px;
    display: flex;
    gap: 1em;
    cursor: pointer;
    font-weight: 700;
`;
export const Option = styled.div<{ $isChoosen: boolean }>`
    padding: 1em 2em;
    background-color: ${({ $isChoosen, theme }) =>
        $isChoosen ? theme.colors.mainColor : 'transparent'};
    border-radius: 65px;
    color: ${({ $isChoosen, theme }) =>
        $isChoosen ? theme.colors.subColor : theme.colors.mainColor};
`;

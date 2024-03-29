import styled from 'styled-components';
import { devices } from '../../providers/Theme/constants';

export const Container = styled.div`
    display: none;
    ${devices.md} {
        background-color: ${({ theme }) => theme.colors.white};
        width: 54px;
        height: 54px;
        border-radius: 65px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3px;
        cursor: pointer;
    }
`;
export const BurgerLine = styled.span`
    width: 24px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.dark};
`;

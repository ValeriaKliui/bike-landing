import styled from 'styled-components';
import { devices } from '../../providers/Theme/constants';

export const Container = styled.div<{ $isOpened: boolean }>`
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
        position: relative;
        z-index: 1000;
        padding-top: ${({ $isOpened }) => ($isOpened ? '10px' : 0)};

        .burger-line {
            display: block;
            opacity: ${({ $isOpened }) => ($isOpened ? 0 : 1)};
        }
        .burger-line:first-child {
            transform: ${({ $isOpened }) =>
                $isOpened ? 'rotate(45deg) translate(0, 0px)' : 'unset'};
            opacity: 1;
        }
        .burger-line:last-child {
            transform: ${({ $isOpened }) =>
                $isOpened ? 'rotate(-45deg) translate(7px, -7px);' : 'unset'};
            opacity: 1;
        }
    }
`;
export const BurgerLine = styled.span`
    width: 24px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.dark};
`;

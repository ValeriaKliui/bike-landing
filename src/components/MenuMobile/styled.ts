import styled from 'styled-components';
import { devices } from '../../providers/Theme/constants';

export const Container = styled.div<{ $isOpened: boolean }>`
    display: none;
    ${devices.md} {
        display: ${({ $isOpened }) => ($isOpened ? 'block' : 'none')};
        position: fixed;
        top: 0;
        background-color: ${({ theme }) => theme.colors.subColor};
        height: 100%;
        width: 100%;
        z-index: 1;
        padding-top: 5em;
    }
`;

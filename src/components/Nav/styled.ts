import styled from 'styled-components';
import { devices } from '../../providers/Theme/constants';

export const NavContainer = styled.nav<{ $isMenuOpened: boolean }>`
    display: flex;
    gap: 3em;
    ${devices.md} {
        display: ${({ $isMenuOpened }) => ($isMenuOpened ? 'flex' : 'none')};
        flex-direction: ${({ $isMenuOpened }) => $isMenuOpened && 'column'};
        align-items: ${({ $isMenuOpened }) => $isMenuOpened && 'center'};
    }
`;

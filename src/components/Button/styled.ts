import styled from 'styled-components';
import { devices } from '../../providers/Theme/constants';

export const ButtonStyled = styled.button<{ $primary?: boolean }>`
    font-size: 16px;
    font-weight: 700;
    border: none;
    padding: 1em 2em;
    border-radius: 50px;
    background-color: ${({ theme, $primary }) =>
        $primary ? theme.colors.primary : theme.colors.white};
    color: ${({ theme, $primary }) =>
        $primary ? theme.colors.white : theme.colors.dark};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme, $primary }) =>
            $primary ? theme.colors.white : theme.colors.primary};
        color: ${({ theme, $primary }) =>
            $primary ? theme.colors.dark : theme.colors.white};
    }

    ${devices.lg} {
        font-size: 16px;
    }
`;

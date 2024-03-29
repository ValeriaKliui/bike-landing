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
        $primary ? theme.colors.white : 'inherit'};
    cursor: pointer;
    ${devices.lg} {
        font-size: 16px;
    }
`;

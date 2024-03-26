import styled from 'styled-components';

export const ButtonStyled = styled.button<{ $primary?: boolean }>`
    font-size: 16px;
    font-weight: 700;
    border: none;
    padding: 1em 2em;
    border-radius: 50px;
    background-color: ${({ theme, $primary }) =>
        $primary ? theme.primary : theme.button};
    color: ${({ theme, $primary }) => ($primary ? theme.white : 'inherit')};
    cursor: pointer;
`;

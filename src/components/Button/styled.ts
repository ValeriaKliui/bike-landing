import styled from 'styled-components';

export const ButtonStyled = styled.button`
  font-size: 16px;
  font-weight: 700;
  border: none;
  padding: 1em 2em;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.button};
  cursor: pointer;
`;

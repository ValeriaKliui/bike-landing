import styled from 'styled-components';
import LogoSvg from '@assets/icons/logo.svg?react';

export const Logo = styled(LogoSvg)`
  path {
   fill: ${({ theme }) => theme.primary};
  }
`;

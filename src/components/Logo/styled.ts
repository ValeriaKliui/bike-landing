import LogoSvg from '@assets/icons/logo.svg?react';
import styled from 'styled-components';
import { ColorType } from '../ImageBlock/interfaces';

export const LogoStyled = styled(LogoSvg)<{ $type: ColorType }>`
    path {
        fill: ${({ theme, $type = ColorType.primary }) =>
            $type === ColorType.primary
                ? theme.colors.primary
                : theme.colors.white};
    }
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
    }
`;

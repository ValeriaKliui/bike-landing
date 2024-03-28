import styled from 'styled-components';
import LogoSvg from '@assets/icons/logo.svg?react';
import { ColorType } from '../ImageBlock/interfaces';

export const Logo = styled(LogoSvg)<{ $type: ColorType }>`
    path {
        fill: ${({ theme, $type = ColorType.primary }) =>
            $type === ColorType.primary
                ? theme.colors.primary
                : theme.colors.white};
    }
`;

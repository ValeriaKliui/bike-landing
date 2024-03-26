import styled from 'styled-components';
import { ColorType } from './interfaces';

export const SectionWrapper = styled.section<{
    $src: string;
    $colorType: ColorType;
}>`
    background: no-repeat top/100% url(${({ $src }) => $src});
    background-size: cover;
    box-shadow: ${({ $colorType }) =>
        $colorType === ColorType.primary &&
        'inset 0 0 0 100vmax rgba(232, 181, 119, 0.2)'};
    padding: 8.5em 0;
    color: ${({ $colorType, theme }) =>
        $colorType === ColorType.light ? theme.white : 'inherit'};
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8em;
`;
export const Text = styled.div`
    max-width: 34%;
`;
export const Title = styled.h2<{
    $colorType: ColorType;
}>`
    color: ${({ $colorType, theme }) =>
        $colorType === ColorType.light ? 'inherit' : theme.primary};
`;

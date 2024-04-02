import styled from 'styled-components';
import { ColorType } from '../ImageBlock/interfaces';
import { devices } from '../../providers/Theme/constants';

export const SectionWrapper = styled.section`
    padding: 1em;
`;
export const AdvantagesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 2em;
    position: relative;
    z-index: 2;
    div {
        cursor: pointer;
    }
    ${devices.md} {
        grid-template-columns: 1fr;
        gap: 1em;
        div {
            cursor: unset;
        }
    }
`;
export const SectionTitle = styled.h2<{ $colorType: ColorType }>`
    color: ${({ $colorType, theme }) =>
        $colorType === ColorType.primary ? theme.colors.primary : 'inherit'};
`;
export const AdvantageTextContainer = styled.div<{
    $index: number;
    $isChoosen: boolean;
}>`
    display: flex;
    flex-direction: column;
    grid-column-start: ${({ $index }) => $index + 1};
    color: ${({ theme, $isChoosen }) =>
        $isChoosen ? 'inherit' : theme.colors.disabled};
    &:hover {
        h4 {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
    ${devices.md} {
        grid-column-start: unset;
        color: inherit;
    }
`;
export const TitleContainer = styled.div<{
    $isLast: boolean;
    $isChoosen: boolean;
}>`
    min-height: 5em;
    position: relative;
    color: ${({ theme, $isChoosen }) =>
        $isChoosen ? theme.colors.primary : theme.colors.disabled};
    &::after {
        content: '';
        display: block;
        height: 3px;
        width: ${({ $isLast }) => ($isLast ? '100%' : '130%')};
        background-color: ${({ theme, $isChoosen }) =>
            $isChoosen ? theme.colors.primary : theme.colors.disabled};
        position: absolute;
        bottom: 0;
        ${devices.md} {
            width: 150px;
            background-color: ${({ theme }) => theme.colors.primary};
        }
    }
    ${devices.md} {
        min-height: 3em;
    }
`;
export const Title = styled.h4<{
    $isChoosen: boolean;
}>`
    ${devices.md} {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
export const AdvantageImage = styled.img<{
    $isFirst: boolean;
    $totalAmount: number;
}>`
    max-height: 400px;
    width: 100%;
    object-fit: cover;
    object-position: 50%;
    border-radius: 15px;
    grid-row-start: 2;
    grid-column: ${({ $isFirst, $totalAmount }) =>
        $isFirst ? `1/${$totalAmount}` : $totalAmount};
    cursor: ${({ $isFirst }) => !$isFirst && 'pointer'};
    &:hover {
        transform: ${({ $isFirst }) => !$isFirst && 'scale(1.02)'};
    }
    ${devices.md} {
        grid-row-start: unset;
        grid-column: unset;
        margin-bottom: 1em;
        cursor: unset;
        &:hover {
            transform: unset;
        }
    }
`;

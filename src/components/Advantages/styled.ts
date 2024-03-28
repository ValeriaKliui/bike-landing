import styled from 'styled-components';
import { ColorType } from '../ImageBlock/interfaces';

export const SectionWrapper = styled.section`
    padding: 1em;
`;
export const AdvantagesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 2em;
    div {
        cursor: pointer;
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
        transform: scale(1.01);
        h4 {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;
export const Title = styled.h4<{
    $isLast: boolean;
    $isChoosen: boolean;
}>`
    color: ${({ theme, $isChoosen }) =>
        $isChoosen ? theme.colors.primary : theme.colors.disabled};
    &::after {
        content: '';
        display: block;
        width: ${({ $isLast }) => ($isLast ? '100%' : '130%')};
        height: 3px;
        margin-top: 1em;
        background-color: ${({ theme, $isChoosen }) =>
            $isChoosen ? theme.colors.primary : theme.colors.disabled};
    }
`;
export const AdvantageImage = styled.img<{
    $isFirst: boolean;
    $totalAmount: number;
}>`
    grid-row-start: 2;
    max-height: 400px;
    width: 100%;
    object-fit: cover;
    object-position: 50%;
    border-radius: 15px;
    grid-column: ${({ $isFirst, $totalAmount }) =>
        $isFirst ? `1/${$totalAmount}` : $totalAmount};
    cursor: ${({ $isFirst }) => !$isFirst && 'pointer'};
    &:hover {
        transform: ${({ $isFirst }) => !$isFirst && 'scale(1.02)'};
    }
`;

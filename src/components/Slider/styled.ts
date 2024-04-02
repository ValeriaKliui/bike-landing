import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import { devices } from '@/providers/Theme/constants';

export const Container = styled.div`
    position: relative;
`;
export const CarouselStyled = styled(Carousel)`
    overflow: unset;
    position: unset;
    .carouselItem {
        padding-right: 2em;
        ${devices.sm} {
            padding: 1em;
        }
    }
`;

export const Review = styled.div`
    white-space: pre-line;
    background-color: ${({ theme }) => theme.colors.subColor};
    border-radius: 15px;
    height: 100%;
    padding: 3em 1em 3em 3em;
    ${devices.sm} {
        padding: 1em;
    }
`;
export const Name = styled.h4`
    &::after {
        content: '';
        margin-top: 0.7em;
        display: block;
        width: 100px;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;
export const ArrowsContainer = styled.div`
    display: flex;
    gap: 1em;
    position: absolute;
    right: 0;
    bottom: -25%;
    ${devices.md} {
        display: none;
    }
`;

export const LeftButton = styled.div`
    width: 54px;
    height: 54px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        svg {
            path,
            rect {
                fill: ${({ theme }) => theme.colors.white};
            }
        }
    }
`;
export const RightButton = styled(LeftButton)`
    transform: rotate(180deg);
`;

export const Dot = styled.div<{ $active: boolean }>`
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.dark};
    opacity: ${({ $active }) => ($active ? 1 : 0.3)};
    width: 10px;
    height: 10px;
    border-radius: 100px;
`;

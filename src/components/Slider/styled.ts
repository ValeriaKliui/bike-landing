import styled from 'styled-components';
import Carousel from 'react-multi-carousel';

export const CarouselStyled = styled(Carousel)`
    overflow: unset;
    position: unset;
`;

export const Review = styled.div`
    white-space: pre-line;
    background-color: ${({ theme }) => theme.colors.subColor};
    border-radius: 15px;
    height: 100%;
    padding: 3em 1em 3em 3em;
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

export const LeftButton = styled.div`
    width: 54px;
    height: 54px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute !important;
    bottom: -25%;
    right: 7%;

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
    right: 0;
`;

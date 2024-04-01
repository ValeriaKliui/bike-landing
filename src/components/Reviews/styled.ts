import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
`;
export const ReviewsContainer = styled.div<{ $left: number; $gap: number }>`
    display: flex;
    gap: ${({ $gap }) => $gap}px;
    position: relative;
    left: -${({ $left }) => $left}px;
    transition: 2s ease-in-out;
`;

export const Buttons = styled.div`
    align-self: flex-end;
    display: flex;
    gap: 1em;
`;

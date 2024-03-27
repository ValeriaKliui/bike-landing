import styled from 'styled-components';

export const SectionContainer = styled.section`
    overflow: hidden;
`;
export const Container = styled.div<{ $left: number; $gap: number }>`
    display: flex;
    gap: ${({ $gap }) => $gap}px;
    position: relative;
    left: -${({ $left }) => $left}px;
    transition: 2s ease-in-out;
`;
export const Review = styled.div`
    padding: 3em;
    background-color: ${({ theme }) => theme.white};
    flex-shrink: 0;
    flex-basis: 30%;
    border-radius: 15px;
`;
export const Name = styled.h4`
    &::after {
        content: '';
        margin-top: 0.7em;
        display: block;
        width: 100px;
        height: 3px;
        background-color: ${({ theme }) => theme.dark};
    }
`;

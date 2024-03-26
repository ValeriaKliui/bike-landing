import styled from 'styled-components';

export const SectionContainer = styled.section`
    overflow: hidden;
`;
export const Container = styled.div<{ $left: number }>`
    display: flex;
    gap: 3em;
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
        width: 100px;
        height: 3px;
        background-color: ${({ theme }) => theme.dark};
    }
`;
export const Title = styled.h2`
    color: ${({ theme }) => theme.primary};
`;

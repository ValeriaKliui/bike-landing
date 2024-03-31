import styled from 'styled-components';

export const SectionContainer = styled.section`
    overflow: hidden;
`;
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

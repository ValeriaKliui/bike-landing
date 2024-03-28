import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4em;
`;
export const SectionText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-basis: 55%;
`;
export const TextContainer = styled.div`
    max-width: 80%;
`;
export const Question = styled.h4`
    &::after {
        content: '';
        display: block;
        width: 100px;
        height: 3px;
        margin-top: 20px;
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;
export const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3em;
`;

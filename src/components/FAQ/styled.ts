import styled from 'styled-components';
import { devices } from '../../providers/Theme/constants';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4em;
    ${devices.md} {
        flex-direction: column;
        gap: 0;
    }
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
export const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3em;
    ${devices.md} {
        gap: 1.7em;
    }
`;

export const Question = styled.h4`
    &::after {
        content: '';
        display: block;
        width: 100px;
        height: 3px;
        margin-top: 20px;
        background-color: ${({ theme }) => theme.colors.primary};
        ${devices.md} {
            margin-top: 15px;
        }
    }
`;

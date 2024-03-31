import { devices } from '@/providers/Theme/constants';
import styled from 'styled-components';

export const Review = styled.div`
    padding: 3em;
    white-space: pre-line;
    background-color: ${({ theme }) => theme.colors.subColor};
    flex-shrink: 0;
    flex-basis: 30%;
    border-radius: 15px;
    ${devices.md} {
        flex-basis: 75%;
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

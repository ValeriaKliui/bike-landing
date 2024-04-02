import styled from 'styled-components';
import { devices } from '../../providers/Theme/constants';

export const Container = styled.div`
    border: 3px solid ${({ theme }) => theme.colors.mainColor};
    width: fit-content;
    border-radius: 65px;
    display: flex;
    gap: 1em;
    cursor: pointer;
    font-weight: 700;
    ${devices.sm} {
        width: 80%;
        align-self: center;
    }
    ${devices.xs} {
        width: 100%;
    }
`;
export const Option = styled.div<{ $isChoosen: boolean }>`
    padding: 1em 2em;
    border-radius: 65px;
    background-color: ${({ $isChoosen, theme }) =>
        $isChoosen ? theme.colors.mainColor : 'transparent'};
    color: ${({ $isChoosen, theme }) =>
        $isChoosen ? theme.colors.subColor : theme.colors.mainColor};

    ${devices.md} {
        padding: 1em 1.5em;
    }
    ${devices.sm} {
        width: 100%;
        padding: 1.3em 1.7em;
        text-align: center;
    }
`;

import styled from 'styled-components';
import PathSrc from '@assets/images/path_top.svg';
import { devices } from '../../providers/Theme/constants';

export const SectionContainer = styled.section`
    margin: 0;
`;
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    ${devices.md} {
        gap: 1em;
    }
    ${devices.sm} {
        flex-direction: column;
        align-items: center;
    }
    ${devices.xs} {
        gap: 2em;
    }
`;
export const TextContainer = styled.div`
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    gap: 2em;
    ${devices.lg} {
        flex-basis: 70%;
    }
    ${devices.md} {
        flex-basis: 10%;
        gap: 1em;
    }
`;
export const Title = styled.h2`
    margin: 0;
`;
export const Description = styled.p`
    max-width: 63%;
    ${devices.sm} {
        max-width: unset;
    }
`;
export const Icons = styled.div`
    display: flex;
    gap: 1.5em;
    ${devices.sm} {
        flex-wrap: wrap;
    }
`;
export const IconContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.dark};
    width: fit-content;
    padding: 0.5em 1em;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
export const ImgContainer = styled.div`
    position: relative;
    z-index: 1;
    &::before {
        position: absolute;
        top: -65%;
        left: 20%;
        display: block;
        content: url(${PathSrc});
    }
`;
export const Img = styled.img`
    position: relative;
    z-index: 0;
`;

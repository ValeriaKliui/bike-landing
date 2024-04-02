import styled from 'styled-components';
import { devices } from '@providers/Theme/constants';

export const SectionContainer = styled.section`
    padding: 8em 0;
    margin-bottom: 6em;
    background: url(${({ theme: { src } }) => src.previewBike}) no-repeat fixed;
    background-size: auto;
    background-position: right top;
    ${devices.xxxl} {
        background-position: 70% top;
    }
    ${devices.xxl} {
        background-position: 500px top;
    }
    ${devices.xl} {
        background-position: 400px top;
        background-size: contain;
    }
    ${devices.lg} {
        padding: 4em 0;
    }
    ${devices.md} {
        padding: 4em 0 2em 0;
        background-position: 200px 10%;
    }
    ${devices.sm} {
        background-position: -50px top;
        background-size: 170%;
        padding: 21em 0 2em 0;
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
`;
export const Subtitle = styled.h3`
    max-width: 43%;
    margin-bottom: 1em;
    ${devices.sm} {
        max-width: 83%;
        white-space: pre-line;
    }
    ${devices.sm} {
        max-width: 93%;
    }
`;

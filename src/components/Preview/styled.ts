import styled from 'styled-components';
import BikeImg from '@assets/images/bike.png';
import { devices, media } from '../Theme/constants';

export const SectionContainer = styled.section`
    padding: 8em 0;
    margin-bottom: 6em;
    background: url(${BikeImg}) no-repeat fixed;
    background-size: auto;
    background-position: right top;
    ${devices.lg} {
        padding: 4em 0;
    }
    ${devices.md} {
        padding: 4em 0 2em 0;
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
`;

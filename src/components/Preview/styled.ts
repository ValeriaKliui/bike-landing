import styled from 'styled-components';
import BikeImg from '@assets/images/bike.png';

export const SectionContainer = styled.section`
    padding: 8em 0;
    margin-bottom: 6em;
    background: url(${BikeImg}) no-repeat fixed;
    background-size: auto;
    background-position: -60% top;
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

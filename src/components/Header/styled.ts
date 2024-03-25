import { styled } from 'styled-components';
import BikeImg from '@assets/images/bike.png';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2em 0;
    background: url(${BikeImg}) no-repeat fixed;
    background-position: top right;
    background-size: 70%;
`;
export const Container = styled.div`
    display: flex;
    gap: 4em;
    align-items: center;
`;

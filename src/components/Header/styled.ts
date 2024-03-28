import { styled } from 'styled-components';
import BikeImg from '@assets/images/bike.png';
import { media } from '../Theme/constants';

export const HeaderContainer = styled.header`
    background: url(${BikeImg}) no-repeat fixed;
    background-position: right top;
    background-size: auto;
`;
export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2em 0;
`;
export const Container = styled.div`
    display: flex;
    gap: 4em;
    align-items: center;
`;

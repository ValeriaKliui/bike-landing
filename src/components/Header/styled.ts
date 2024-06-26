import { styled } from 'styled-components';
import BikeImg from '@assets/images/bike.png';
import { devices } from '../../providers/Theme/constants';

export const HeaderContainer = styled.header`
    background: url(${BikeImg}) no-repeat fixed;
    background-position: right top;
    background-size: auto;
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
    ${devices.md} {
        background-position: 200px 10%;
    }
    ${devices.sm} {
        background-position: -50px top;
        background-size: 170%;
    }
`;
export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2em 0;
    ${devices.md} {
        align-items: flex-start;
    }
`;
export const Container = styled.div`
    display: flex;
    gap: 4em;
    align-items: center;
`;
export const ButtonWrapper = styled.div`
    ${devices.md} {
        display: none;
    }
`;

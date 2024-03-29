import styled from 'styled-components';
import PathLine from '@assets/images/path_line.png';
import PathLineRight from '@assets/images/Path_right.png';
import { devices } from '../../providers/Theme/constants';

export const SectionContainer = styled.section`
    position: relative;
    z-index: 10;
`;
export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.subColor};
    border-radius: 15px;
    display: flex;
    padding: 3em;
    position: relative;
    &::before {
        content: url(${PathLineRight});
        display: block;
        position: absolute;
        top: -30%;
        left: -10%;
        z-index: -1;
    }
    &::after {
        content: url(${PathLine});
        display: block;
        position: absolute;
        top: -210px;
        right: -60px;
    }
    ${devices.md} {
        flex-direction: column;
    }
`;
export const Title = styled.h2`
    margin-bottom: 0.3em;
`;
export const Subtitle = styled.h3`
    margin-bottom: 1.3em;
`;
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12em;
    align-items: flex-start;
    ${devices.md} {
        margin-bottom: 1em;
    }
    ${devices.sm} {
        gap: 2em;
        align-items: center;
    }
`;
export const MediaContainer = styled.div`
    position: relative;
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
    ${devices.md} {
        position: static;
        justify-content: flex-start;
    }
    ${devices.sm} {
        justify-content: center;
    }
`;
export const Complect = styled.div`
    position: relative;
    z-index: 2;
`;
export const ComplectText = styled.div`
    ${devices.md} {
        display: none;
    }
`;
export const BikeImage = styled.img`
    position: absolute;
    top: -37%;
    right: 0;
    display: block;
    max-height: 550px;
    z-index: 1;
    object-fit: contain;
    -webkit-box-reflect: below -14px linear-gradient(to top, rgba(255, 0, 0, 0.8), rgba(
                    255,
                    0,
                    0,
                    0
                )
                4%);
    ${devices.md} {
        top: -17%;
        right: -30%;
        max-height: 450px;
    }
    ${devices.sm} {
        display: none;
    }
`;
export const ImgBikeMobile = styled.img`
    display: none;
    ${devices.sm} {
        display: block;
    }
`;
export const TogglerContainer = styled.div`
    ${devices.sm} {
        display: flex;
        justify-content: center;
    }
`;

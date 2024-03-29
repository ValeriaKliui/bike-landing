import styled from 'styled-components';
import pathImgBottomSrc from '@assets/images/path_design.svg';
import { devices } from '../../providers/Theme/constants';

export const Wrapper = styled.div`
    position: relative;
    z-index: 1;
    &::after {
        content: url(${pathImgBottomSrc});
        position: absolute;
        right: 86%;
        top: 60%;
        display: block;
    }
`;
export const Container = styled.div`
    display: flex;
    gap: 2em;
    position: relative;
    z-index: 2;
    ${devices.md} {
        flex-direction: column;
    }
`;
export const Title = styled.h2`
    max-width: 65%;
    ${devices.md} {
        max-width: unset;
    }
`;

import styled from 'styled-components';
import pathImgSrc from '@assets/images/path_img.svg';
import pathImgBottomSrc from '@assets/images/Path_img_bottom.svg';
import pathBottomSrc from '@assets/images/path_bottom.svg';
import { devices } from '@/providers/Theme/constants';

export const Main = styled.main`
    flex-grow: 1;
`;
export const Wrapper = styled.div`
    position: relative;
    &::after {
        content: url(${pathBottomSrc});
        position: absolute;
        bottom: -176px;
        right: 0;
        display: block;
    }
`;
export const PathWrapper = styled.div`
    position: relative;
    z-index: 0;
    &::before {
        content: url(${pathImgSrc});
        position: absolute;
        top: -59%;
        right: 0;
        display: block;
        ${devices.lg} {
            top: -54%;
        }
        ${devices.md} {
            top: -64%;
        }
        ${devices.sm} {
            top: -97%;
        }
    }
    &::after {
        content: url(${pathImgBottomSrc});
        position: absolute;
        top: 100%;
        right: 0;
        display: block;
    }
`;

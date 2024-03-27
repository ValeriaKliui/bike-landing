import styled from 'styled-components';
import PathLine from '@assets/images/path_line.png';
import PathLineRight from '@assets/images/Path_right.png';

export const SectionContainer = styled.section`
    position: relative;
    z-index: 10;
`;
export const Container = styled.div`
    background-color: ${({ theme }) => theme.white};
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
`;
export const MediaContainer = styled.div`
    position: relative;
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
`;
export const Complect = styled.div`
    position: relative;
    z-index: 2;
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
`;

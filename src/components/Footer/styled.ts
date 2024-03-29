import styled from 'styled-components';
import { devices } from '../../providers/Theme/constants';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    width: 100%;
    ${devices.sm} {
        flex-direction: column;
        align-items: center;
    }
`;
export const WorkData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    ${devices.sm} {
        align-items: center;
        text-align: center;
    }
`;

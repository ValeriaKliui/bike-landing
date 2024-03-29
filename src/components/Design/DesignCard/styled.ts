import { devices } from '@/providers/Theme/constants';
import styled from 'styled-components';

export const ContainerDesktop = styled.div<{ $src: string }>`
    background: no-repeat center/cover url(${({ $src }) => $src});
    color: ${({ theme }) => theme.colors.white};
    width: 560px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 4em;
    border-radius: 20px;
    ${devices.sm} {
        display: none;
    }
`;
export const ContainerMobile = styled.div`
    display: none;
    ${devices.sm} {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }
`;
export const Image = styled.img`
    border-radius: 20px;
`;

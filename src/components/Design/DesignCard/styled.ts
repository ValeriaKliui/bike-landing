import styled from 'styled-components';

export const Container = styled.div<{ $src: string }>`
    background: no-repeat center/cover url(${({ $src }) => $src});
    color: ${({ theme }) => theme.colors.white};
    width: 560px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 4em;
    border-radius: 20px;
`;

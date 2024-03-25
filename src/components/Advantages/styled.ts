import styled from 'styled-components';

export const SectionWrapper = styled.section`
    padding: 1em;
`;
export const AdvantagesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
    /* img:nth-child(2) {
        grid-column: 1/3;
        width: 100%;
    } */
    div {
        cursor: pointer;
    }
`;

export const AdvantageTextContainer = styled.div<{
    $index: number;
    $isChoosen: boolean;
}>`
    grid-column-start: ${({ $index }) => $index + 1};
    color: ${({ theme, $isChoosen }) =>
        $isChoosen ? 'inherit' : theme.disabled};
`;
export const Title = styled.h4<{ $isLast: boolean; $isChoosen: boolean }>`
    color: ${({ theme, $isChoosen }) =>
        $isChoosen ? theme.primary : theme.disabled};
    &::after {
        content: '';
        display: block;
        width: ${({ $isLast }) => ($isLast ? '100%' : '110%')};
        height: 2px;
        margin-top: 1em;
        background-color: ${({ theme, $isChoosen }) =>
            $isChoosen ? theme.primary : theme.disabled};
    }
`;
export const AdvantageImage = styled.img<{
    $index: number;
}>`
    transition: 1s ease-in;
    grid-row-start: 2;
    /* opacity: ${({ $index }) => $index}; */
`;

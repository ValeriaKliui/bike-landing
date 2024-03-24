import styled from 'styled-components';

export const SectionWrapper = styled.section<{ $src: string }>`
  background: no-repeat top/100% url(${({ $src }) => $src});
  padding: 8.5em 0;
`;

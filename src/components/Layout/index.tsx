import styled from 'styled-components/native';

interface LayoutProps {
  padding?: number;
  backgroundColor?: string;
}

export const Layout = styled.View<LayoutProps>`
  flex: 1;
  padding: ${({ padding }) => padding || 0}px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'transparent'};
`;

import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  z-index: 1;
`;

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin: 0 auto;
`;

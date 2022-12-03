import styled from 'styled-components';
import { LogoutOutlined } from '@ant-design/icons';
import { breakpoints } from 'styleConfig/breakpoints';

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: ${({ theme }) => theme.lineHeights.body};
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.shadow};

  @media screen and (${breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.l};
    border-right: 1px solid ${({ theme }) => theme.colors.shadow};
    padding-right: 12px;
    margin-right: 12px;
  }
`;

export const UserAvatar = styled.div`
  margin-right: 0;
  @media screen and (${breakpoints.tablet}) {
    margin-right: 10px;
  }
`;

export const UserName = styled.div`
  display: none;

  @media screen and (${breakpoints.tablet}) {
    display: block;
    padding-top: 3px;
    min-width: 100%;
  }
`;

export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
`;

export const LogOutIcon = styled(LogoutOutlined)`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.shadow};

  @media screen and (${breakpoints.tablet}) {
    margin-right: 8px;
  }
`;

export const LogOutText = styled.div`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    display: block;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-size: ${({ theme }) => theme.fontSizes.l};
    line-height: ${({ theme }) => theme.lineHeights.body};
    color: ${({ theme }) => theme.colors.shadow};
    padding-top: 3px;
  }
`;

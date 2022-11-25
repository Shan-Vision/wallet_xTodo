import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  //height: 100vh;
  @media screen and (${breakpoints.laptop}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const AuthFormContainer = styled.div`
  @media screen and (${breakpoints.laptop}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 731px;
    position: relative;
    background: ${({ theme }) => theme.colors.blur};
    backdrop-filter: blur(25px);
    z-index: 1;
  }
`;

export const AuthPageTitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  @media screen and (${breakpoints.laptop}) {
    flex-direction: column;
    width: 549px;
    padding-left: 76px;
  }
`;

export const AuthPageImg = styled.img`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    display: block;
    height: 260px;
    width: 250px;
    margin-right: 40px;
    margin-top: 60px;
    @media screen and (${breakpoints.laptop}) {
      height: 435px;
      width: 420px;
      margin-right: 0;
      margin-bottom: 28px;
    }
  }
`;

export const AuthPageTitle = styled.div`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    display: block;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    line-height: ${({ theme }) => theme.lineHeights.body};
    color: ${({ theme }) => theme.colors.black};
    z-index: 999;
  }
`;

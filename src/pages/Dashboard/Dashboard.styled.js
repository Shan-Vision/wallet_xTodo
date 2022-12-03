import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const DashbordBlur = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.blur};
  backdrop-filter: blur(25px);
  z-index: 1;
  min-height: 89.5vh;
  display: flex;
  @media screen and (${breakpoints.tablet}) {
    min-height: 91.5vh;
  }
`;

export const DashboardWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  @media screen and (${breakpoints.tablet}) {
    padding: 0 32px;
    margin: 0 auto;
  }
  @media screen and (${breakpoints.laptop}) {
    padding: 0 16px 47px 16px;
    display: flex;
    max-width: 1280px;
  }
`;

export const DashboardLaptopWrapper = styled.div`
  @media screen and (${breakpoints.laptop}) {
    border-right: 1px solid #e7e5f2;
    padding-right: 69px;
  }
`;
export const DashboardTabletWrapper = styled.div`
  @media screen and (${breakpoints.tablet}) {
    display: flex;
    margin-bottom: 20px;
    max-width: 715px;
    margin: 0 auto 20px;
  }
  @media screen and (${breakpoints.laptop}) {
    display: block;
  }
`;
export const WrapperBase = styled.div`
  @media screen and (${breakpoints.tablet}) {
    display: block;
  }
`;

import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const DashbordBlur = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.blur};
  backdrop-filter: blur(25px);
  z-index: 1;
`;

export const DashboardWrapper = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (${breakpoints.tablet}) {
    padding: 0 32px;
  }
  @media screen and (${breakpoints.laptop}) {
    padding: 0 16px 47px 16px;
    display: flex;
  }
`;

export const DashboardLaptopWrapper = styled.div`
  @media screen and (${breakpoints.laptop}) {
  border-right: 1px solid #E7E5F2;
  padding-right: 69px;
  }
`
export const DashboardTabletWrapper = styled.div`
@media screen and (${breakpoints.tablet}) {
  display: flex;
}
@media screen and (${breakpoints.laptop}) {
    display: block;
  }
`
export const WrapperBase = styled.div`
@media screen and (${breakpoints.tablet}) {
    display: block;
}
`
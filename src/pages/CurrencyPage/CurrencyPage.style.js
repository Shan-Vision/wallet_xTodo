import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const CurrencyBlur = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.blur};
  backdrop-filter: blur(25px);
  z-index: 1;
  min-height: 89.5vh;
`;

export const CurrencyWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  @media screen and (${breakpoints.tablet}) {
    padding: 0 32px;
    margin: 0 auto;
  }
  @media screen and (${breakpoints.laptop}) {
    padding: 0 16px 47px 16px;
    display: flex;
  }
`;

export const CurrencyLaptopWrapper = styled.div`
  @media screen and (${breakpoints.laptop}) {
    border-right: 1px solid #e7e5f2;
    padding-right: 69px;
  }
`;
export const CurrencyTabletWrapper = styled.div`
  @media screen and (${breakpoints.tablet}) {
    display: flex;
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

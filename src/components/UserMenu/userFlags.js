import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const FlagsDiv = styled.div`
  position: relative;
  z-index: 1999;
  top: 0.5px;
  right: 15px;
  @media (${breakpoints.tablet}) {
    position: relative;
    z-index: 999;
    top: 0.5px;
    right: 15px;
  }
  @media (${breakpoints.laptop}) {
    position: relative;
    top: 0.5px;
    right: 15px;
  } ;
`;

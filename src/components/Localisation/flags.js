import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';


export const FlagsDiv = styled.div`
  position: absolute;
  z-index: 1999;
  top: 25px;
  right: 35px;
  @media (${breakpoints.tablet}) {
    position: absolute;
    z-index: 999;
    top: 25px;
    right: 45px;
  }
  @media (${breakpoints.laptop}) {
    position: absolute;
    top: 25px;
    right: 25px;
  } ;
`;
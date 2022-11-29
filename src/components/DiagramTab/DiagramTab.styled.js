import styled from 'styled-components';
import { breakpoints } from '../../styleConfig/breakpoints';

export const DiagramTabContainer = styled.div`
  //background-color: #E7EAF2;
   display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  @media screen and (${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: end;
  }
`;

export const DiagramTabTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[1]}px;
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xxxl};
  line-height: ${p => p.theme.lineHeights.body};
  @media screen and (${breakpoints.tablet}) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const ChartDiagramContainer = styled.div`
  margin-bottom: ${p => p.theme.space[6]}px;
  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 0;
    margin-right: ${p => p.theme.space[6]}px;
  }
`;

export const StatistiscTableContainer = styled.div`
  max-width: 280px;

  @media screen and (${breakpoints.tablet}) {
     max-width: 336px;
  }
  @media screen and (${breakpoints.laptop}) {
     max-width: 336px;
  }
`;

export const DiagramTabText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const DiagramTabTotal = styled.span`
  color: ${p => p.accent};
`;
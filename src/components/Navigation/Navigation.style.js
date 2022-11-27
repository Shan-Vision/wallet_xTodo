import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { SlGraph } from 'react-icons/sl';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { breakpoints } from 'styleConfig/breakpoints';

export const NavList = styled.ul`
  display: flex;
  padding: 12px 62px;

  @media screen and (${breakpoints.tablet}) {
  padding: 40px 0 28px 0;
  }
  @media screen and (${breakpoints.laptop}) {
    padding: 40px 0 28px 0;
  }
`;

export const NavigLink = styled(NavLink)`
  color: gray;
  display: flex;
  align-items: center;
  @media screen and (${breakpoints.tablet}) {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  } 
`;

export const NavItem = styled.li`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  @media screen and (${breakpoints.tablet}) {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (${breakpoints.laptop}) {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const NavText = styled.span`
  display: none;
  font-size: ${p => p.theme.fontSizes.l};
  font-family: 'Poppins';
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  &:hover,
  &:focus,
  &:active {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
  @media screen and (${breakpoints.tablet}) {
    display: block;
  }
  @media screen and (${breakpoints.laptop}) {
    display: block;
  }
`;


export const IconWrapper = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 23px;
`;

export const IconHome = styled(FaHome)`
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.small};
`;
export const IconGraph = styled(SlGraph)`
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.small};
`;

export const IconCurrency = styled(MdOutlineAttachMoney)`
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.small};
`;
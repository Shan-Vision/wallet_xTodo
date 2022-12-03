import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { SlGraph } from 'react-icons/sl';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { breakpoints } from 'styleConfig/breakpoints';

export const NavList = styled.ul`
  display: flex;
  padding: 30px 62px 12px;

  @media screen and (${breakpoints.tablet}) {
    padding: 40px 0 0 0;
  }
  @media screen and (${breakpoints.laptop}) {
    padding: 40px 0 14px 0;
  }
`;

export const NavigLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &:not(:last-child) {
    margin-right: 28px;
  }
  &:hover,
  &:focus {
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.black};
    /* text-decoration: underline; */
  }
  
  @media screen and (${breakpoints.tablet}) {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
  &.active span {
    color: ${p => p.theme.colors.black};
    font-weight: ${p => p.theme.fontWeights.bold};
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
  &:hover {
    color: ${p => p.theme.colors.black};
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
  &.active {
    background-color: red;
  }
`;

export const IconHome = styled(FaHome)`
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.small};
  background-color: #6e78e8;
  padding: 2px;
  transition: color 250ms linear;
  filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  &:hover,
  &:focus,
  &:active {
    background-color: ${p => p.theme.colors.secondary};
  }

  @media screen and (${breakpoints.tablet}) {
    &:hover,
    &:focus,
    &:active {
      transition: color 250ms linear;
      background-color: ${p => p.theme.colors.secondary};
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
  @media screen and (${breakpoints.laptop}) {
    &:hover,
    &:focus,
    &:active {
      transition: color 250ms linear;
      background-color: ${p => p.theme.colors.secondary};
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
`;
export const IconGraph = styled(SlGraph)`
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.small};
  background-color: #6e78e8;
  padding: 2px;
  transition: color 250ms linear;
  filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  &:hover,
  &:focus,
  &:active {
    background-color: ${p => p.theme.colors.secondary};
  }
  @media screen and (${breakpoints.tablet}) {
    &:hover,
    &:focus,
    &:active {
      background-color: ${p => p.theme.colors.secondary};
    }
  }
  @media screen and (${breakpoints.laptop}) {
    &:hover,
    &:focus,
    &:active {
      background-color: ${p => p.theme.colors.secondary};
    }
  }
`;

export const IconCurrency = styled(MdOutlineAttachMoney)`
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.small};
  background-color: #6e78e8;
  transition: color 250ms linear;
  filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  &:hover,
  &:focus,
  &:active {
    background-color: ${p => p.theme.colors.secondary};
  }
  @media screen and (${breakpoints.tablet}) {
    &:hover,
    &:focus,
    &:active {
      background-color: ${p => p.theme.colors.secondary};
    }
  }
  @media screen and (${breakpoints.laptop}) {
    &:hover,
    &:focus,
    &:active {
      background-color: ${p => p.theme.colors.secondary};
    }
  }
`;

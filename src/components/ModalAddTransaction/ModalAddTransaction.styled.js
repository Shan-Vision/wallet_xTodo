import styled from 'styled-components';
import { Form, Field } from 'formik';
import { breakpoints } from 'styleConfig/breakpoints';
import { CloseOutlined, CalendarOutlined } from '@ant-design/icons';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${breakpoints.tablet}) {
    background-color: rgba(0, 0, 0, 0.25);
  }
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px;
  width: 100%;
  height: 100%;
  font-family: ${p => p.theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  background-color: ${p => p.theme.colors.primary};
  position: relative;
  top: 60px;

  @media (${breakpoints.tablet}) {
    width: 540px;
    max-height: 603px;
    border-radius: 20px;
  }
`;

export const CloseButton = styled(CloseOutlined)`
  font-size: 16px;

  position: absolute;
  top: 20px;
  right: 20px;

  &:hover {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[8]}px;
  font-size: ${p => p.theme.fontSizes.xxl};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.black};

  @media (${breakpoints.tablet}) {
    margin-top: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (${breakpoints.tablet}) {
    flex-flow: wrap;
  }
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;

  @media (${breakpoints.tablet}) {
    flex-direction: row;
    flex-flow: wrap;
    width: 394px;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: ${p => p.theme.space[8]}px;
`;

export const InputCategory = styled.div`
  margin-bottom: ${p => p.theme.space[8]}px;
  width: 100%;

  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  height: 32px;

  @media (${breakpoints.tablet}) {
    width: 394px;
  }
`;

export const InputAmount = styled(Field)`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0 ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
  background-color: transparent;
  outline: 0;
  border: none;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  width: 100%;
  height: 32px;

  &::placeholder {
    font-family: ${p => p.theme.fonts.primary};
    font-weight: ${p => p.theme.fontWeights.semibold};
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.shadow};
  }

  @media (${breakpoints.tablet}) {
    width: 181px;
    margin-right: 32px;
    text-align: center;
    margin-bottom: 0;

    &::placeholder {
      text-align: center;
    }
  }
`;

export const InputDate = styled.div`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0 ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
  background-color: transparent;
  outline: 0;
  border: none;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  width: 100%;
  height: 32px;
  position: relative;

  @media (${breakpoints.tablet}) {
    width: 181px;
  }
`;

export const CalendarIcon = styled(CalendarOutlined)`
  font-size: 20px;
  color: ${p => p.theme.colors.secondary};

  position: absolute;
  bottom: ${p => p.theme.space[1]}px;
  right: ${p => p.theme.space[1]}px;
`;

export const InputComment = styled.textarea`
  padding: 0 ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};

  background-color: transparent;
  border: none;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  width: 100%;
  height: 84px;
  resize: none;
  &::placeholder {
    font-family: ${p => p.theme.fonts.primary};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.shadow};
  }

  @media (${breakpoints.tablet}) {
    padding: 0 ${p => p.theme.space[1]}px;
    overflow: hidden;
    width: 394px;
    height: 32px;
  }
`;

export const PrimaryButton = styled.button`
  transition: all 0.3s ease;
  width: 300px;
  height: 50px;
  margin-bottom: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.medium};
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;

export const SecondaryButton = styled.button`
  transition: all 0.3s ease;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;
  color: ${p => p.theme.colors.secondary};
  background-color: transparent;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.medium};
  outline: none;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;

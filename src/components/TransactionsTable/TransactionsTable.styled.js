import styled from 'styled-components';
import { Table } from 'antd';
import { breakpoints } from 'styleConfig/breakpoints';

export const StyledTable = styled(Table)`
  max-width: 750px;
  .ant-table {
    max-width: 800px;
    border-radius: ${p => p.theme.radii.large};
    background: transparent;
    /* transparent; */
  }
  .ant-table .ant-table-container {
    border-radius: 0;
  }
  .ant-table table {
    border-radius: 30px;
  }
  thead.ant-table-thead tr th {
    font-family: ${p => p.theme.fonts.primary};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    background: ${p => p.theme.colors.primary};
  }
  .ant-table-cell {
    font-family: ${p => p.theme.fonts.primary};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
  }
  .ant-table-container,
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-radius: 30px 0 0 30px;
  }
  .ant-table-container,
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-radius: 0 30px 30px 0;
  }

  .rowStyled > td:first-child {
    border-radius: 30px 0 0 30px;
  }
  .rowStyled > td:last-child {
    border-radius: 0 30px 30px 0;
  }
`;

export const List = styled.ul`
  width: 100%;
  margin-bottom: ${p => p.theme.space[1]};
  border-radius: 10px;
  border-left: 5px solid;
  border-left-color: ${({ type }) => (type === 'income' ? 'green' : 'red')};
  background: ${p => p.theme.colors.primary};
  overflow: hidden;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  padding: 8px 20px;
  :not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
`;

export const ListText = styled.span`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const SumStyled = styled.span`
  color: ${({ type }) => (type === 'income' ? 'green' : 'red')};
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  @media screen and (${breakpoints.tablet}) {
    padding-right: 0;
    min-width: 0;
  }
  @media screen and (${breakpoints.laptop}) {
    padding: 46px 0 0 0px;
    width: 100%;
  }
`;

import { Table, Popconfirm } from 'antd';
// import React, { useEffect, useState } from 'react';
import React, {  useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTransactions, transactionsSelectors } from '../../redux';
import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

const TransactionsTable = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: '6379436603242dc9c4ee5ba7',
      date: '2022-11-19T20:58:14.882Z',
      income: false,
      comment: 'spending money',
      category: '6378dbbf7f1022fdac49bdf1',
      sum: 1200,
      balance: 1.005,
    },
    {
      id: '63794341dcad1aa066a8abf6',
      date: '2022-11-19T20:57:37.123Z',
      income: true,
      comment: 'got money',
      category: '6378dbbf7f1022fdac49bdf3',
      sum: 12000,
      balance: 1.005,
    },
    {
      id: '63794018e00f3397247682ce',
      date: '2022-11-19T20:44:08.250Z',
      income: true,
      comment: 'got money',
      category: '6378dbbf7f1022fdac49bdf3',
      sum: 12000,
      balance: 1.005,
    },
  ]);

  const handleDelete = id => {
    const newData = dataSource.filter(item => item.id !== id);
    setDataSource(newData);
  };

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: true,
      width: '15%',
    },
    {
      title: 'Type',
      dataIndex: 'income',
      key: 'income',
      render: (_, { income }) => (income ? '+' : '-'),

      filters: [
        {
          text: '+',
          value: '+',
        },
        {
          text: '-',
          value: '-',
        },
      ],
      width: '10%',
      onFilter: (value, item) => item.income.includes(value),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '15%',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      width: '15%',
    },
    {
      title: 'Sum',
      dataIndex: 'sum',
      key: 'sum',
      width: '15%',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      width: '15%',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <button>Delete</button>
          </Popconfirm>
        ) : null,
    },
  ];

  // const dispatch = useDispatch();
  // const transactions = useSelector(transactionsSelectors.getTransactions);
  // console.log(transactions);

  // useEffect(() => {
  //   dispatch(getTransactions());
  // }, [dispatch]);

  return (
    <TableWrapper>
    <StyledTable
      columns={columns}
      dataSource={dataSource}
      // dataSource={transactions?.map(item => ({
      //   ...item,
      //   key: item.id,
      // }))}

      pagination={{
        defaultPageSize: '10',
        showSizeChanger: true,
        pageSizeOptions: [5, 10, 15],
        position: ['bottomRight'],
      }}
      scroll={{
        y: 255,
      }}
      />
      </TableWrapper>
  );
};

export default TransactionsTable;

const StyledTable = styled(Table)`
  .ant-table {
    border-radius: ${p => p.theme.radii.large};
    background: transparent;
  }
  .ant-table .ant-table-container {
    border-radius: 0;
  }
  .ant-table table {
    border-radius: 30px;
  }
  thead.ant-table-thead tr th {
    background: ${p => p.theme.colors.primary};
  }
  .ant-table-container,
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-radius: 30px 0 0 30px;
  }
  .ant-table-container,
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-radius: 0 30px 30px 0;
  }
`;

const TableWrapper = styled.div`
@media screen and (${breakpoints.tablet}) { 
padding-right: 0;
}
@media screen and (${breakpoints.laptop}) { 
padding: 46px 0 0 69px;
width: 100%;
}
`
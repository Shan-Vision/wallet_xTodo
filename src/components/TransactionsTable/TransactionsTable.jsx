import { Popconfirm, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTransactions,
  deleteTransaction,
  transactionsSelectors,
  categoriesSelectors,
  getCategories,
} from '../../redux';

import Media from 'react-media';
import {
  List,
  ListItem,
  ListText,
  StyledTable,
  SumStyled,
  TableWrapper,
} from './TransactionsTable.styled';

const TransactionsTable = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelectors.getTransactions);
  const categories = useSelector(categoriesSelectors.getCategories);
  const { t } = useTranslation();

  const handleDelete = id => {
    dispatch(deleteTransaction(id));
  };

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const columns = [
    {
      title: [t('transactions.date')],
      dataIndex: 'date',
      key: 'date',
      render: record => {
        const date = new Date(record);
        const year = date.getFullYear().toString().padStart(4, 0);
        const month = (date.getMonth() + 1).toString().padStart(2, 0);
        const day = date.getDate().toString().padStart(2, 0);
        return `${day}.${month}.${year}`;
      },
      width: '17%',
    },
    {
      title: [t('transactions.type')],
      dataIndex: 'type',
      key: 'type',
      render: type => (type === 'income' ? '+' : '-'),

      filters: [
        {
          text: '+',
          value: 'income',
        },
        {
          text: '-',
          value: 'expense',
        },
      ],
      width: '10%',
      onFilter: (value, item) => item.type.includes(value),
    },
    {
      title: [t('transactions.category')],
      dataIndex: 'category',
      key: 'category',
      render: category => (
        <>
          {categories
            .filter(elem => elem.id === category)
            .map(({ name }) => {
              return t(`categoryName.${name}`);
            })}
        </>
      ),
      width: '14%',
    },
    {
      title: [t('transactions.comment')],
      dataIndex: 'comment',
      key: 'comment',
      width: '14%',
    },
    {
      title: [t('transactions.sum')],
      dataIndex: 'sum',
      key: 'sum',
      render: (sum, item) => (
        <SumStyled type={item.type}>{sum.toFixed(2)} </SumStyled>
      ),
      width: '17%',
    },
    {
      title: [t('transactions.balance')],
      dataIndex: 'balance',
      key: 'balance',
      render: (_, { balance }) => balance.toFixed(2),
      width: '17%',
    },
    {
      title: [t('transactions.actions')],
      dataIndex: 'actions',
      render: (_, record) =>
        transactions.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="link">
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        ) : null,
    },
  ];

  const getCurrentDate = item => {
    const date = new Date(item);
    const year = date.getFullYear().toString().padStart(4, 0);
    const month = (date.getMonth() + 1).toString().padStart(2, 0);
    const day = date.getDate().toString().padStart(2, 0);
    return `${day}.${month}.${year}`;
  };

  return (
    <TableWrapper>
      <Media query="(min-width: 768px)">
        {matches =>
          matches ? (
            <StyledTable
              rowClassName="rowStyled"
              columns={columns}
              dataSource={transactions?.map(item => ({
                ...item,
                key: item.id,
              }))}
              pagination={{
                defaultPageSize: '10',
                showSizeChanger: true,
                pageSizeOptions: [5, 10, 15],
                position: ['bottomRight'],
              }}
              scroll={{
                y: 400,
              }}
            />
          ) : (
            <TableWrapper>
              {transactions?.map(item => (
                <List type={item.type} key={item.id}>
                  <ListItem>
                    <ListText>{t('transactions.date')}</ListText>
                    {getCurrentDate(item.date)}
                  </ListItem>
                  <ListItem>
                    <ListText>{t('transactions.type')}</ListText>
                    {item.type === 'income' ? '+' : '-'}
                  </ListItem>
                  <ListItem>
                    <ListText>{t('transactions.category')}</ListText>
                    {categories
                      .filter(elem => elem.id === item.category)
                      .map(el => el.name)}
                  </ListItem>
                  <ListItem>
                    <ListText>{t('transactions.comment')}</ListText>
                    {item.comment}
                  </ListItem>
                  <ListItem>
                    <ListText>{t('transactions.sum')}</ListText>
                    <SumStyled type={item.type}>
                      {item.sum.toFixed(2)}
                    </SumStyled>
                  </ListItem>
                  <ListItem>
                    <ListText>{t('transactions.balance')}</ListText>
                    {item.balance.toFixed(2)}
                  </ListItem>
                  <ListItem>
                    <ListText>{t('transactions.actions')}</ListText>
                    <Popconfirm
                      title="Sure to delete?"
                      onConfirm={() => handleDelete(item.id)}
                    >
                      <Button type="link">
                        <DeleteOutlined />
                      </Button>
                    </Popconfirm>
                  </ListItem>
                </List>
              ))}
            </TableWrapper>
          )
        }
      </Media>
    </TableWrapper>
  );
};

export default TransactionsTable;

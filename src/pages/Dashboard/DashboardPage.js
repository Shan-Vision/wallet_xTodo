import Currency from 'components/Currency/Currency';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import ModalAddTransaction from 'components/ModalAddTransaction';
import IconButton from 'components/IconButton';
import { PlusOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import TransactionsTable from 'components/TransactionsTable/TransactionsTable';
import Balance from 'components/Balance';
import Navigation from 'components/Navigation';
import { DashboardWrapper, DashbordBlur, DashboardLaptopWrapper, DashboardTabletWrapper, WrapperBase } from './Dashboard.styled';

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashbordBlur>
      <DashboardWrapper>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <DashboardLaptopWrapper>
          <DashboardTabletWrapper>
            <WrapperBase>
            <Navigation />
            <Balance />
            </WrapperBase>
          <IconButton onClick={() => setIsModalOpen(true)}>
          <PlusOutlined style={{ fontSize: '20px' }} />
          </IconButton>
            <Currency />
            </DashboardTabletWrapper>
        </DashboardLaptopWrapper>
        {isModalOpen && (
          <ModalAddTransaction onClose={() => setIsModalOpen(false)} />
        )}
        <TransactionsTable />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </DashboardWrapper>
    </DashbordBlur>
  );
};

export default DashboardPage;

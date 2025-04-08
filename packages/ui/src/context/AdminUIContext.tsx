import React, { createContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  RadialLinearScale,
  Title,
} from 'chart.js';
import { ConfigProvider } from 'antd';
import locale from 'antd/locale/ko_KR';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  RadialLinearScale,
  Title,
);
interface AdminUIContextProps {}

const AdminUIContext = createContext<AdminUIContextProps>({});

export const AdminUIContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AdminUIContext.Provider value={{}}>
      <ConfigProvider locale={locale}>{children}</ConfigProvider>
    </AdminUIContext.Provider>
  );
};

export default AdminUIContext;

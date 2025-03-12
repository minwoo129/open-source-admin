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
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
);
interface AdminUIContextProps {}

const AdminUIContext = createContext<AdminUIContextProps>({});

export const AdminUIContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AdminUIContext.Provider value={{}}>{children}</AdminUIContext.Provider>
  );
};

export default AdminUIContext;

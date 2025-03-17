import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { AdminUIContextProvider } from '@admin/ui';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdminUIContextProvider>
      <App />
    </AdminUIContextProvider>
  </StrictMode>,
);

//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './pages/PageLayout';
import Main from './pages/Main';
//import { Table } from '@admin/ui';
//import { Table } from '@admin/ui';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './pages/PageLayout';
import Main from './pages/Main';
import TestPage1 from './pages/TestPage1';
import TestPage2 from './pages/TestPage2';
//import { Table } from '@admin/ui';
//import { Table } from '@admin/ui';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/test1" element={<TestPage1 />} />
          <Route path="/test2" element={<TestPage2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

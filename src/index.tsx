import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoginForm from './components/LoginForm copy/LoginForm';
import MyForm from './components/myForm/MyForm';
import BrotherHood from './homeworks/homework_08/brotherhood/BrotherHood';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<BrotherHood />} />
          <Route path='my-form' element={<MyForm />} />
          <Route path='login' element={<LoginForm />} />
        </Route>
      </Routes>
    </HashRouter>
  </>
);



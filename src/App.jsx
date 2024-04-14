import { GlobalStyle } from './styles/components/GlobalStyles.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import BoothPage from './pages/BoothPage.jsx';
import MadeBy from './pages/MadeBy.jsx';

import FallingAni from './components/FallingAni.jsx';
import Notice from './pages/Notice.jsx';
import TimeTable from './pages/TimeTable.jsx';
import TimeTable2 from './pages/TimeTable2.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/booth',
    element: <BoothPage />,
  },
  {
    path: '/TimeTable',
    element: <TimeTable />,
  },
  {
    path: '/Notice',
    element: <Notice />,
  },
  {
    path: '/MadeBy',
    element: <MadeBy />,
  },
  {
    path: '/TimeTable2',
    element: <TimeTable2 />,
  },
  
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        {/* <FallingAni /> */}
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

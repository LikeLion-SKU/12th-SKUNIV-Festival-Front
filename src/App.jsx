import { RouterProvider } from 'react-router-dom';

import { GlobalStyle } from '@styles/GlobalStyles.js';

import FallingAni from '@components/FallingAni.jsx';

import router from '@routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <FallingAni />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

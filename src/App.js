import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/router';

function App({ children }) {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </div>
  );
}

export default App;

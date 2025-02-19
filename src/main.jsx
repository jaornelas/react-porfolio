import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//use of bootstrap to customize page
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import App from './App.jsx';
import ErrorPage from './components/Error.jsx';
import AboutMe from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true, 
        element: <AboutMe />
      },
      {
        path: 'portfolio', 
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'resume',
        element: <Resume />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

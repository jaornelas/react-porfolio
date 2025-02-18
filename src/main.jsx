import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//use of bootstrap to customize page
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import App from './App.jsx';
import Error from './Error.jsx';
import AboutMe from './AboutMe.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';

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

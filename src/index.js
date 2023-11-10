import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Aspirations from "./Components/Aspirations";
import Education from "./Components/Education";
import Tools from "./Components/Tools";
import Frameworks from "./Components/Frameworks";
import WebResume from "./Components/WebResume";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
/*
  {
    path: '/frameworks',
    element: <Frameworks />
  },
*/
  {
    path: '/webresume',
    element: <WebResume />
  },
/*
  {
    path: '/tools',
    element: <Tools />
  },
  {
    path: '/education',
    element: <Education />
  },
  {
    path: '/aspirations',
    element: <Aspirations />
  }
*/
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}>
        <App/>
    </RouterProvider>
);

export default root;
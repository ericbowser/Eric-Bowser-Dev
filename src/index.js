import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/*import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Hobbies from "./Hobbies/Hobbies";
import Aspirations from "./Hobbies/Aspirations";
import Frameworks from "./Components/Frameworks";
import Experience from "./Components/Experience";
import Tools from "./Components/Tools";
import Education from "./Components/Education";
import Container from "react-bootstrap/Container";
import Navigation from "./route/Navigation";*/
import 'bootstrap/dist/css/bootstrap.min.css';

/*const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container>
        <App />
      </Container>
    )
  },
  {
    path: "/experience",
    element:(
      <>
        <Navigation />
        <Experience />
      </>
    )
  },
  {
    path: "/tools",
    element:(
    <>
      <Navigation />
      <Tools />
    </>)
  },
  {
    path: "/frameworks",
    element: (
      <>
        <Navigation/>
        <Frameworks/>
      </>
    )
  },
  {
    path: "/education",
    element: (
      <>
        <Navigation/>
        <Education />
      </>
    )
  },
  {
    path: "/aspirations",
    element: (
      <>
        <Navigation/>
        <Aspirations />
      </>
    )
  },
  {
    path: "/hobbies",
    element: (
      < >
        <Navigation/>
        <Hobbies />
      </>
    )
  },
]);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<RouterProvider router={router}>*/
  <React.StrictMode>
    <App />
  </React.StrictMode>
  /*</RouterProvider>*/
);

export default root;
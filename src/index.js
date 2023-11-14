import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Frameworks from "./Components/Frameworks";
import {WtwInfo, ProEdgeInfo, GoldPointInfo, TekSystemsInfo} from "./Components/Experience";
import Tools from "./Components/Tools";
import Education from "./Components/Education";
import Aspirations from "./Components/Aspirations";
import {Container} from "react-bootstrap";
import Navigation from "./Components/Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    )
  },
  {
    path: "/experience",
    element:(
      <Container>
        <Navigation />
          <WtwInfo />
          <GoldPointInfo />
          <ProEdgeInfo />
          <TekSystemsInfo />
      </Container>
    )
  },
  {
    path: "/tools",
    element:(
    <Container>
      <Navigation />
        <Tools />
    </Container>)
  },
  {
    path: "/frameworks",
    element: (
      <Container>
        <Navigation/>
          <Frameworks/>
      </Container>
    )
  },
  {
    path: "/education",
    element: (
      <Container>
        <Navigation/>
          <Education />
      </Container>
    )
  },
  {
    path: "/aspirations",
    element: (
      <Container>
        <Navigation/>
          <Aspirations />
      </Container>
    )
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
      <App />
  </RouterProvider>
);

export default root;
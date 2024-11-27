import Header from './Header';
import { Footer } from './Footer';
import { Body } from './Body';
import styled from 'styled-components';
// import React from 'react';
import {Outlet, createBrowserRouter,RouterProvider } from "react-router-dom"


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  color: black;
  width: 100vw;
  height: 100vh;

`;
const routes = createBrowserRouter([
  {path: "/", 
    element: (
      <Wrapper>
        <Header />
        <Outlet />
        <Body />
        <Footer />
      </Wrapper>
    ),
  children: [
     
    {path: "/", element: <div></div>}, 
    {path:"/our-story",element:<div></div>},
    {path:"/our-mission", element: <div></div>},
    {path:"/our-board-members",element:<div></div>},
    {path: "/projects", element: <div></div>},
    {path:"/past-medical-missions",element:<div></div>},
    {path: "/get-involved", element: <div></div>},
    {path:"/copy-of-apply",element:<div></div>},
    {path:"/registration-process", element: <div></div>},
    {path:"/logistics",element:<div></div>},
    {path: "/donate", element: <div></div>}, 
    {path:"/application-payment",element:<div></div>},
    {path: "/blog", element: <div></div>},
    {path: "/faq", element: <div></div>},
    {path: "/contact", element: <div></div>},
    ]
  }
]);


function App() {
  return (
    <RouterProvider router = {routes} />

  );
}

export default App;

import React from 'react';
import './Styles/App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    children: [
      {
    path: "/items",
    element: <div>items</div>,
  },
  {
    path: "/items/:id",
    element: <div>details</div>,
  },
    ]
  },
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

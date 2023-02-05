import React from 'react';
import './Styles/App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Searchbar from './Components/Searchbar/Searchbar';
import ItemsList from './Pages/ItemsList/ItemsList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Searchbar />,
    children: [
      {
        path: "/items",
        element: <ItemsList />,
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import React from 'react';
import './Styles/App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Searchbar from './Pages/Searchbar/Searchbar';
import ItemsList, { loader as ItemsListLoader } from './Pages/ItemsList/ItemsList';
import ItemDetails, { loader as ItemDetailsLoader } from './Pages/ItemDetails/ItemDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Searchbar />,
    children: [
      {
        path: "/items",
        element: <ItemsList />,
        loader: ItemsListLoader,
      },
      {
        path: "/items/:itemId",
        element: <ItemDetails />,
        loader: ItemDetailsLoader,
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

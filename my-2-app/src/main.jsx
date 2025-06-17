import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { AppProvider } from './context/AppContext';
import store from './store/store.js'
import { Provider } from 'react-redux'
const count =0;
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [ {

              path: 'layout',
              element: < Layout />,
              },]
  },
,
])
ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
        <AppProvider>
                    <Provider store={store}>
                              <RouterProvider router={router} />
                    </Provider>
        </AppProvider>
  </React.StrictMode>)

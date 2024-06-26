import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/index.css'
import routes from './componants/routes';
import RealApp from './RealApp';



const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RealApp />
  </React.StrictMode>,
)

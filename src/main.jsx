import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';
import { router } from './Shared/Routes/Routes';


ReactDOM.createRoot(document.getElementById('root')).render(
<HelmetProvider>
<div className="max-w-screen-xl mx-auto">
  <RouterProvider router={router} />
</div>
</HelmetProvider>



)

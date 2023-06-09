import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';

import AuthProvider from './Providers/AuthProviders';
import { router } from './Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')).render(


<AuthProvider>
<HelmetProvider>

<QueryClientProvider client={queryClient}>
<div className="max-w-screen-xl mx-auto">
  <RouterProvider router={router} />
</div>
  
</QueryClientProvider>


</HelmetProvider>
</AuthProvider>





)

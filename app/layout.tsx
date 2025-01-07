import React from 'react';
import '@/assets/styles/globals.css';
import Navbar from '@/components/navbar';

export default function RootLayout(
    {
        children
    }:{
        children: React.ReactNode
    }
) {
  return (
    <html>
        <body>
            <Navbar />
            <h1 className='text-3xl text-red-600'>RootLayout</h1>
            <div>{ children }</div>
        </body>
    </html>
  )
}

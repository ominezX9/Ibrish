import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './routes'

export default function App() {
  return (
    <div>
      <RouterProvider router={Router}/>
    </div>
  )
}

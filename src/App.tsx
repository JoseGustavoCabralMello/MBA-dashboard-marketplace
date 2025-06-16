import { RouterProvider } from 'react-router/dom'
import './index.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | market.place'/>
      <RouterProvider router={router}/>
    </HelmetProvider>
  )
}


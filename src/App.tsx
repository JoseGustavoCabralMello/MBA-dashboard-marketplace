import { RouterProvider } from 'react-router/dom'
import './index.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="dashboard-theme">
        <Helmet titleTemplate='%s | market.place'/>
        <Toaster richColors />
        <RouterProvider router={router}/>
      </ThemeProvider>
    </HelmetProvider>
  )
}


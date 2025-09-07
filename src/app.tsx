import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { AuthProvider } from '@/contexts/AuthContext'

export function App() {
  return (
    <AuthProvider>
      <HelmetProvider>
        <ThemeProvider defaultTheme="system" storageKey="dashboard-theme">
          <Helmet titleTemplate='%s | market.place'/>
          <Toaster richColors />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </AuthProvider>
  )
}

export default App


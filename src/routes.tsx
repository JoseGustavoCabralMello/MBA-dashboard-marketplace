import { createBrowserRouter } from "react-router";
import { Dasboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";

export const router = createBrowserRouter([
  { path: '/', 
    element: <AppLayout />, 
    children: [{ path: '/', element: <Dasboard /> }] 
  },
  {
    path: '/', 
    element: <AppLayout />, 
    children: [{ path: '/sign-in', element: <SignIn />}] 
  },
])
import { createBrowserRouter } from "react-router";
import { Dasboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";

export const router = createBrowserRouter([
  { path: '/', element: <Dasboard /> },
  { path: '/sign-in', element: <SignIn /> }
])
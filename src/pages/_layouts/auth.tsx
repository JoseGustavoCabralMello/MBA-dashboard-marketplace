import { Store } from "lucide-react";
import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
      <div className="flex items-center gap-3 text-lg text-foreground">
        <Store className="h-5 w-5"/>
        <span className="font-semibold">market.place</span>
      </div>
      <footer className="text-sm">
        Painel do parceiro &copy; market.place - {new Date().getFullYear()}
      </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
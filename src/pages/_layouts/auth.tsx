import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
      <div className="flex items-center gap-3 text-lg text-foreground">
        <img src="/src/assets/Logo.svg" alt="" />
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">
            Marketplace
          </h1>
          <p className="text-sm text-muted-foreground">
            Painel de vendedor
          </p>
        </div>
      </div>
      <div className="items-center gap-3 text-lg text-foreground">
        <div className="flex bg-white rounded-3xl h-auto w-auto">
          <div className="items-center justify-center bg-blue-200 h-14 w-14">
            <img className="" src="/src/assets/sale-tag.svg" alt="" />
          </div>
          <p>
            Acompanhe os produtos vendidos
          </p>
        </div>
        <img src="/src/assets/store.svg" alt="" />
        <img src="/src/assets/chart-histogram.svg" alt="" />
        <img src="/src/assets/Vector.svg" alt="" />
        <img src="/src/assets/kraft-box.svg" alt="" />
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
import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between ">
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
        <div className="relative h-full justify-center items-center gap-3 text-lg text-foreground">

          <div className="absolute top-1/6 left-1/2 flex bg-white rounded-3xl gap-3 p-3 pr-4 h-auto w-max">
            <div className="flex items-center justify-center bg-blue-200 rounded-2xl h-14 w-14">
              <img className="h-7 w-7" src="/src/assets/sale-tag.svg" alt="" />
            </div>
            <div className="w-38">
              <p>
                Acompanhe os produtos vendidos
              </p>
            </div>
          </div>
        
          <div className="absolute bottom-1/2 left-1/9 z-11 flex bg-white rounded-3xl gap-3 p-3 pr-4 h-auto w-max">
            <div className="flex items-center justify-center bg-blue-200 rounded-2xl h-14 w-14">
              <img className="h-7 w-7" src="/src/assets/store.svg" alt="" />
            </div>
            <div className="w-38">
              <p>
                Gerencie seus anúncios
              </p>
            </div>
          </div>

          <div className="absolute bottom-3/12 right-1/8 flex bg-white rounded-3xl gap-3 p-3 pr-4 h-auto w-max">
            <div className="flex items-center justify-center bg-blue-200 rounded-2xl h-14 w-14">
              <img className="h-7 w-7" src="/src/assets/chart-histogram.svg" alt="" />
            </div>
            <div className="w-38">
              <p>
                Veja sua loja crescendo
              </p>
            </div>
          </div>
          <div className="absolute w-full top-1/3">
            <img className="w-full" src="/src/assets/Vector.svg" alt="" />
          </div>
          <div className="absolute h-1/2 w-1/2 z-10 flex bottom-1/5 right-1/6">
            <img className="h-full w-full" src="/src/assets/kraft-box.svg" alt="" />
          </div>          
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
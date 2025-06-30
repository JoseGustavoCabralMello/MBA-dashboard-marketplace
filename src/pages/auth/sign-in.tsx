import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { BookKeyIcon, EyeIcon, Mail } from "lucide-react"
import { Helmet } from "react-helmet-async"

export function SignIn() {
  return (
    <>
      <Helmet title="Login"/>
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-MAIL</Label>
              <div className="flex items-center text-muted-foreground">
                <Mail />
                <Input className="ring-0 border-0 shadow-none focus-visible:ring-offset-0 focus-visible:ring-0" id="email" type="email" placeholder="Seu e-mail cadastrado"/>
              </div>
              <Separator />
            </div>

            <div className="space-y-2" >
              <Label htmlFor="password">SENHA</Label>
              <div className="flex items-center text-muted-foreground">
                <BookKeyIcon />
                <Input className="ring-0 border-0 shadow-none focus-visible:ring-offset-0 focus-visible:ring-0" id="password" type="password" placeholder="Sua senha de acesso"/>
                <EyeIcon />
              </div>
              <Separator />
            </div>

            <Button className="w-full" type="submit">Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}
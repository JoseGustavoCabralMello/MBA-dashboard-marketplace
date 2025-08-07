import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { BookKeyIcon, EyeIcon, Mail } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const signInForm = z.object({
  email: z.email(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm){
    try {
      console.log("Form submitted:", data);
    
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a network request

      toast.success('Enviamos um link de autenticação para o seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      })
    } catch (error) {
      toast.error('Credenciais inválidas!.')
    }
  }

  return (
    <>
      <Helmet title="Login"/>
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-display text-2xl font-bold tracking-tight">
              Acesse sua conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Informe seu e-mail para entrar
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-MAIL</Label>
              <div className="flex items-center text-muted-foreground">
                <Mail />
                <Input className="ring-0 border-0 shadow-none focus-visible:ring-offset-0 focus-visible:ring-0" id="email" type="email" placeholder="Seu e-mail cadastrado" {...register('email')} />
              </div>
              <Separator />
            </div>

            <div className="space-y-2" >
              <Label htmlFor="password">SENHA</Label>
              <div className="flex items-center text-muted-foreground">
                <BookKeyIcon />
                <Input className="ring-0 border-0 shadow-none focus-visible:ring-offset-0 focus-visible:ring-0" id="password" type="password" placeholder="Sua senha de acesso" {...register('password')}/>
                <EyeIcon />
              </div>
              <Separator />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}
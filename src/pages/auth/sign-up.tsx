import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { EyeIcon, KeyRound, Mail, Phone, User } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"

const signUpForm = z.object({
  userName: z.string().min(1, "O nome do gerente é obrigatório"),
  phone: z.string().min(10, "O telefone deve ter pelo menos 10 dígitos"),
  email: z.email(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm){
    try {
      console.log("Form submitted:", data);
    
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a network request

      toast.success('Usuário cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar usuário.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro"/>
      <div className="p-8">

        <Button variant="ghost" asChild className="absolute top-8 right-8">  
          <Link to="/sign-in" className="absolute top-8 right-8">
          Fazer login
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6 overflow-scroll">
            <div className="flex flex-col gap-2 text-left mb-10">
              <h1 className="font-display text-2xl font-bold tracking-tight">
                Crie sua conta
              </h1>
              <p className="text-sm text-muted-foreground">
                Informe seus dados pessoais e de acesso
              </p>
            </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">

            <div className="flex flex-col gap-2 text-left">
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Perfil
              </h2>
            </div>

              <div className="flex items-center">
                <img src="/src/assets/user.jpeg" className="w-30 h-30 rounded-2xl" id="avatar" />
              </div>  

            <div className="space-y-2">
              <Label htmlFor="name">NOME</Label>
              <div className="flex items-center text-muted-foreground">
                <User />
                <Input className="ring-0 border-0 shadow-none focus-visible:ring-offset-0 focus-visible:ring-0" id="name" type="text" placeholder="Seu nome completo" {...register('userName')} />
              </div>
              <Separator />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">TELEFONE</Label>
              <div className="flex items-center text-muted-foreground">
                <Phone />
                <Input className="ring-0 border-0 shadow-none focus-visible:ring-offset-0 focus-visible:ring-0" id="phone" type="tel" placeholder="(00) 0000-0000" {...register('phone')} />
              </div>
              <Separator />
            </div>

            <div className="flex flex-col gap-2 text-left mt-12">
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Acesso
              </h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-MAIL</Label>
              <div className="flex items-center text-muted-foreground">
                <Mail />
                <Input className="ring-0 border-0 shadow-none focus-visible:ring-offset-0 focus-visible:ring-0" id="email" type="email" placeholder="Seu e-mail de acesso" {...register('email')} />
              </div>
              <Separator />
            </div>

            <div className="space-y-2" >
              <Label htmlFor="password">SENHA</Label>
              <div className="flex items-center text-muted-foreground">
                <KeyRound />
                <Input className="ring-0 border-0 shadow-none focus-visible:ring-offset-0 focus-visible:ring-0" id="password" type="password" placeholder="Senha de acesso" {...register('password')}/>
                <EyeIcon />
              </div>

              <Separator />

              <Label htmlFor="cofirm-password">CONFIRMAR SENHA</Label>
              <div className="flex items-center text-muted-foreground">
                <KeyRound />
                <Input className="ring-0 border-0 shadow-none focus-visible:ring-offset-0 focus-visible:ring-0" id="cofirm-password" type="password" placeholder="Confirme a senha" {...register('confirmPassword')}/>
                <EyeIcon />
              </div>
              
              <Separator className="mb-12"/>
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">Cadastrar</Button>
          </form>
        </div>
      </div>
    </>
  )
}
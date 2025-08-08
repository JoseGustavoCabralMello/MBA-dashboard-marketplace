import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { BookKeyIcon, EyeIcon, Mail } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"

const signUpForm = z.object({
  restourantName: z.string().min(1, "O nome do restaurante é obrigatório"),
  managerName: z.string().min(1, "O nome do gerente é obrigatório"),
  phone: z.string().min(10, "O telefone deve ter pelo menos 10 dígitos"),
  address: z.string().min(1, "O endereço é obrigatório"),
  city: z.string().min(1, "A cidade é obrigatória"),
  state: z.string().min(1, "O estado é obrigatório"),
  zipCode: z.string().min(8, "O CEP deve ter pelo menos 8 dígitos"),
  cnpj: z.string().min(14, "O CNPJ deve ter pelo menos 14 dígitos"),
  email: z.email(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
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
          <Link to="/sign-in" className="absolute top-4 right-4 text-sm text-blue-500 hover:underline">
          Fazer login
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-display text-2xl font-bold tracking-tight">
              Crie sua conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Informe seus dados pessoais e de acesso
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
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

            <Button disabled={isSubmitting} className="w-full" type="submit">Cadastrar</Button>
          </form>
        </div>
      </div>
    </>
  )
}
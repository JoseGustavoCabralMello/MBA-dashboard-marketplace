import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import z from "zod";
import { ProductCard } from "../dashboard/product-card";
import { MonthCanceledOrdersAmountCard } from "../dashboard/month-canceled-orders-amount-card";

const productFiltersSchema = z.object({
  productId: z.string().optional(),
  // customerName: z.string().optional(),
  // status: z.string().optional(),
})

type ProductFiltersSchema = z.infer<typeof productFiltersSchema>

export function ProductTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const id = searchParams.get('id')
  // const customerName = searchParams.get('customerName')
  // const status = searchParams.get('status')

  const { register, handleSubmit, control, reset } =
    useForm<ProductFiltersSchema>({
      resolver: zodResolver(productFiltersSchema),
      defaultValues: {
        productId: id ?? '',
        // customerName: customerName ?? '',
        // status: status ?? 'all',
      },
    })

  function handleFilter({ 
    //customerName, 
    productId, 
    //status 
    }: ProductFiltersSchema) {
    setSearchParams((state) => {
      if (productId) {
        state.set('id', productId)
      } else {
        state.delete('id')
      }

      // if (customerName) {
      //   state.set('customerName', customerName)
      // } else {
      //   state.delete('customerName')
      // }

      // if (status) {
      //   state.set('status', status)
      // } else {
      //   state.delete('status')
      // }

      // state.set('page', '1')

      return state
    })
  }

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete('id')
      // state.delete('customerName')
      // state.delete('status')
      // state.set('page', '1')

      return state
    })

    reset({
      productId: '',
      // customerName: '',
      // status: 'all',
    })
  }

  return (
    <form 
      onSubmit={handleSubmit(handleFilter)}
      className="flex flex-col left-auto gap-2"
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        placeholder="ID do pedido"
        className="h-8 w-auto"
        {...register('productId')}
      />
      {/* <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register('customerName')}
      /> */}
      {/* <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos status</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
      ></Controller> */}

      <Button variant="secondary" size="xs" type="submit">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button
        onClick={handleClearFilters}
        variant="outline"
        size="xs"
        type="button"
      >
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
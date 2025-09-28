import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { getProducts } from '@/api/get-products'

export interface ProductCardProps {
  product: {
    productId: string
    title: string
    description: string
    priceInCents: number
    status: 'available' | 'sold' | 'cancelled'
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { data: products } = useQuery({
    queryKey: ['products', product],
    queryFn: () => getProducts({ id: product.productId }),
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Produto
        </CardTitle>

      </CardHeader>
      <CardContent className="space-y-1">
         {products && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {product.productId}
            </span>
            <br />
            <span className="text-2xl font-bold tracking-tight">{product.title}</span>
            <br />
            <span className="text-2xl font-bold tracking-tight">{product.description}</span>
            <br />
            <span className="text-2xl font-bold tracking-tight">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.priceInCents / 100)}
            </span>
            <br />
            <span className="text-2xl font-bold tracking-tight">Status: {product.status}</span>
            {/* <p className="text-xs text-muted-foreground">
              {products.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {products.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{products.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              )}
            </p> */}
          </>
        )}
      </CardContent>
    </Card>
  )
}
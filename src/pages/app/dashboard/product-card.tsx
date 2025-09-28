import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { getProducts } from '@/api/get-products'

export interface ProductCardProps {
  productId: string
}

export function ProductCard({ productId }: ProductCardProps) {
  const { data: products } = useQuery({
    queryKey: ['products', productId],
    queryFn: () => getProducts({ id: productId }),
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
              {products.id}
            </span>
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
import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { getProducts, type Attachment } from '@/api/get-products'

export interface ProductCardProps {
  product: {
    productId: string
    title: string
    description: string
    priceInCents: number
    status: 'available' | 'sold' | 'cancelled'
    attachments: Attachment[]
  }
}

export function ProductCard({ product }: ProductCardProps) {
  

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Produto
        </CardTitle>

      </CardHeader>
      <CardContent className="space-y-1">
            <div className='h-50 w-full  overflow-hidden rounded-md'>
              <div className='bg-transparent'>
                <p className="text-sm font-bold text-black">Status: {product.status}</p>
              </div>
              {product.attachments.map((attachment) => (
              <img key={attachment.id} src={attachment.url}/>
              ))}
            </div>
            
            <div className='flex justify-between mb-4'>
              <p className="font-bold tracking-tight">{product.title}</p>
              <span className="font-bold tracking-tight">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product.priceInCents / 100)}
              </span>
            </div>
            <p className="text-sm">{product.description}</p>
            
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
      </CardContent>
    </Card>
  )
}
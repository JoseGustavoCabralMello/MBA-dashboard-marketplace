//import { formatDistanceToNow } from 'date-fns'
//import { ptBR } from 'date-fns/locale'
//import { OrderDetails } from "@/pages/app/products/product-details";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
//import { OrderStatus } from '@/components/product-status';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
//import { cancelOrder } from '@/api/cancel-product';
//import type { GetOrdersResponse } from '@/api/get-products';
//import { approveOrder } from '@/api/approve-product';
//import { dispatchOrder } from '@/api/dispatch-product';
//import { deliverOrder } from '@/api/deliver-product';
import type { GetProductsResponse } from '@/api/get-products';
import { ProductStatus } from '@/components/product-status';
import { ProductDetails } from "./product-details";
import { ProductCard } from "../dashboard/product-card";

interface ProductTableRowProps {
  products: {
    id: string
    title: string
    description: string
    priceInCents: number
    status: 'available' | 'sold' | 'cancelled'
  }
}

export function ProductTableRow({ products }: ProductTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const queryClient = useQueryClient()

  function updateOrderStatusOnCache(productId: string, status: ProductStatus) {
    const productListCache = queryClient.getQueriesData<GetProductsResponse>({
      queryKey: ['products'],
    })

    productListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      queryClient.setQueryData<GetProductsResponse>(cacheKey, {
        ...cacheData,
        products: cacheData.products.map((product) => {
          if (product.id === productId) {
            return { ...product, status }
          }
            return product
          }),
        })
      })
  }



  // const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } =
  //   useMutation({
  //     mutationFn: cancelOrder,
  //     async onSuccess(_, { productId }) {
  //       updateOrderStatusOnCache(productId, 'canceled')
  //     },
  //   })

  // const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } =
  //   useMutation({
  //     mutationFn: approveOrder,
  //     async onSuccess(_, { productId }) {
  //       updateOrderStatusOnCache(productId, 'processing')
  //     },
  //   })

  // const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } =
  //   useMutation({
  //     mutationFn: dispatchOrder,
  //     async onSuccess(_, { productId }) {
  //       updateOrderStatusOnCache(productId, 'delivering')
  //     },
  //   })

  // const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } =
  //   useMutation({
  //     mutationFn: deliverOrder,
  //     async onSuccess(_, { productId }) {
  //       updateOrderStatusOnCache(productId, 'delivered')
  //     },
  //   })

  return (
    <TableRow>
      <ProductCard />
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Detalhes do produto</DialogTitle>
            <ProductDetails open={isDetailsOpen} productId={products.id} />
          </DialogContent>
        </Dialog>
      </TableCell>
      <TableCell className="font-mono font-medium text-sm">
        {products.id}
      </TableCell>
      {/* <TableCell className="text-muted-foreground">
        {formatDistanceToNow(product.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell> */}

      <TableCell>
        {products.title}
      </TableCell>

      <TableCell>
        {products.description}
      </TableCell>

      <TableCell>
        {(products.priceInCents/100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      
      <TableCell>
        <ProductStatus status={products.status} />
      </TableCell>
      {/* <TableCell className="font-medium">{product.customerName}</TableCell>
      <TableCell className="font-medium">
        {(product.total/100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell> */}
      
      {/* <TableCell>
        {products.status === 'pending' && (
          <Button
            variant="outline"
            disabled={isApprovingOrder}
            size="xs"
            onClick={() => approveOrderFn({ productId: product.productId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Aprovar
          </Button>
        )}

        {products.status === 'processing' && (
          <Button
            variant="outline"
            disabled={isDispatchingOrder}
            size="xs"
            onClick={() => dispatchOrderFn({ productId: product.productId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Em entrega
          </Button>
        )}

        {products.status === 'delivering' && (
          <Button
            variant="outline"
            disabled={isDeliveringOrder}
            size="xs"
            onClick={() => deliverOrderFn({ productId: product.productId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Entregue
          </Button>
        )}
      </TableCell> */}
      {/* <TableCell>
        <Button 
          disabled={
            !['pending', 'processing'].includes(products.status) ||
            isCancelingOrder
          }
          onClick={() => cancelOrderFn({ productId: product.id })}
          variant="ghost"
          size="xs"
        >
          <X className="h-3 w-3 mr-2" />
          Cancelar
        </Button>
      </TableCell> */}
    </TableRow>
  )
}
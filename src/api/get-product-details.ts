import { api } from '@/lib/axios'

export interface GetProductDetailsParams {
  productId: string
}

export interface GetProductDetailsResponse {
  id: string
  // createdAt: string
  // status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  // totalInCents: number
  // customer: {
  //   name: string
  //   email: string
  //   phone: string | null
  // }
  // orderItems: {
  //   id: string
  //   priceInCents: number
  //   quantity: number
  //   product: {
  //     name: string
  //   }
  // }[]
}

export async function getProductDetails({ productId }: GetProductDetailsParams) {
  const response = await api.get<GetProductDetailsResponse>(`/products/${productId}`)

  console.log('get-product-details.ts')
  console.log(response.data)
  return response.data
}
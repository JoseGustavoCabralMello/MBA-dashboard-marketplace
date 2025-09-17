import { api } from '@/lib/axios'

export interface GetProductDetailsParams {
  id: string
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

export async function getProductDetails({ id }: GetProductDetailsParams) {
  const response = await api.get<GetProductDetailsResponse>(`/products/${id}`)

  console.log('get-product-by-id.ts')
  console.log(response.data)
  return response.data
}
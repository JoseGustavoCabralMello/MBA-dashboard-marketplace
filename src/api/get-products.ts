import { api } from '@/lib/axios'

export interface GetProductsQuery {
  id?: string | null
  title?: string | null
  description?: string | null
  priceInCents?: number | null
  status?: string | null
}

export interface GetProductsResponse {
  products: {
    id: string
    title: string
    description: string
    priceInCents: number
        status: 'available' | 'sold' | 'cancelled'
  }[]
}

export async function getProducts({
  id,
  title,
  description,
  priceInCents,
  status,
}: GetProductsQuery) {
  const response = await api.get<GetProductsResponse>('/products', {
    params: {
      id,
      title,
      description,
      priceInCents,
      status,
    },
  })

  console.log(response.data)
  return response.data
}
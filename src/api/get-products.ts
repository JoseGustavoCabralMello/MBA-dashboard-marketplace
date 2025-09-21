import { api } from '@/lib/axios'

export interface GetProductsQuery {
  id?: string | null
  title?: string | null
  description?: string | null
  priceInCents?: number | null
  status?: string | null
}

// export interface GetProduct {
//     id: string
//     title: string
//     description: string
//     priceInCents: number
//     status: 'available' | 'sold' | 'cancelled'
// }

export interface GetProductsResponse {
products: {id: string, title: string, description: string, priceInCents: number, status: 'available' | 'sold' | 'cancelled'
}[]
}

export async function getProducts() {
  const response = await api.get<GetProductsResponse>('/products', {
    
  })

  console.log('get-products.ts')
  console.log(response.data)
  return response.data
}
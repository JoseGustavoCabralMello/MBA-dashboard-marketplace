import { api } from '@/lib/axios'

export interface Attachment {
  id: string
  url: string
}

export interface GetProductsQuery {
  id?: string | null
  title?: string | null
  description?: string | null
  priceInCents?: number | null
  status?: string | null
  attachments?: Attachment[]
}

export interface GetProduct {
    id: string
    title: string
    description: string
    priceInCents: number
    status: 'available' | 'sold' | 'cancelled'
    attachments: Attachment[]
}

export interface GetProductsResponse {
products: {
  id: string, 
  title: string, 
  description: string, 
  priceInCents: number, 
  status: 'available' | 'sold' | 'cancelled'
  attachments: Attachment[]
}[]
}

export async function getProducts({
  id, 
  title, 
  description, 
  priceInCents, 
  status,
  attachments,}: GetProductsQuery) {
  const response = await api.get<GetProductsResponse>('/products', {
    params:{
      id,
      title,
      description,
      priceInCents,
      status,
      attachments: attachments?.map(a => ({ id: a.id, url: a.url })),
    }
  })

  console.log('get-products.ts')
  console.log(response.data)
  return response.data
}
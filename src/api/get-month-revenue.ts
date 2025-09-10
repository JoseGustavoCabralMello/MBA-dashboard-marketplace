import { api } from '@/lib/axios'

export interface GetMonthRevenueResponse {
  amount: number
    diffFromLastMonth: number

}

export async function getMonthRevenue() {
  const response = await api.get<GetMonthRevenueResponse>(
    '/sellers/metrics/products/sold',
  )
  console.log(response.data)
  return response.data
}
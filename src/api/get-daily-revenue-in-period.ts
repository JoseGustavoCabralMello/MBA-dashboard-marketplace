import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export type GetDailyRevenueInPeriodItem = {
  date: string
  amount: number
}

export type GetDailyRevenueInPeriodResponse = {
 viewsPerDay:Array<GetDailyRevenueInPeriodItem>
}

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    '/sellers/metrics/views/days',
    {
      params: {
        from,
        to,
      },
    },
  )
  console.log(response.data.viewsPerDay)
  return response.data.viewsPerDay
}
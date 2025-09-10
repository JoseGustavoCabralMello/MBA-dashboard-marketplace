import { api } from '@/lib/axios'

interface GetProfileData {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

interface GetProfileResponse {
  seller: GetProfileData
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/sellers/me')

  console.log(response.data)
  return response.data.seller
}
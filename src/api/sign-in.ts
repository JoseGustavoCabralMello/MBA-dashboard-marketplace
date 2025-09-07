import axios from 'axios';
import { setToken } from '@/utils/jwt';

export async function signIn(credentials: { email: string; password: string }) {
  try {
    const response = await axios.post('/sellers/sessions', credentials);
    const { token } = response.data;

    if (token) {
      setToken(token);
    }

    return token;
  } catch (error) {
    throw new Error('Authentication failed. Please check your credentials.');
  }
}
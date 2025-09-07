import { useEffect } from 'react';

const TOKEN_KEY = 'jwt_token';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function useAuth() {
  const token = getToken();

  useEffect(() => {
    if (token) {
      // Optionally, you can decode the token and set user state here
    }
  }, [token]);

  return { token, setToken, removeToken };
}
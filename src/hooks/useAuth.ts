import { useState } from "react";
import { setToken } from "@/utils/jwt";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (token: string) => {
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setToken("");
    setIsAuthenticated(false);
  };

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  };

  return {
    isAuthenticated,
    login,
    logout,
    checkAuth,
  };
}
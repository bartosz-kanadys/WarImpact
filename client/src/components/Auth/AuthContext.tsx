import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  toggleValue: () => void;
  logIn: () => void;
  logOut: () => void;
};
export const AuthContext = createContext<AuthContextType | null>(null);
AuthContext.displayName = "AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error(
      "Oh no! Component should be placed inside AuthContextProvider"
    );
  }
  return context;
};

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toggleValue = () => setIsLoggedIn((value) => !value);
    const logIn = () => setIsLoggedIn(true);
    const logOut = () => setIsLoggedIn(false);
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
        setIsLoggedIn(true);
        }
    }, []);
    return { isLoggedIn, toggleValue, logIn, logOut };
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLoggedIn, toggleValue, logIn, logOut } = useAuth();
  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleValue, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
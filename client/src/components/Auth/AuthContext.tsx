import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';

type AuthContextType = {
  isLoggedIn: boolean;
  username: string;
  logIn: () => void;
  logOut: () => void;
};

type JwtPayLoad = {
  login:string
}
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
    const [username, setuserName ] = useState ("");
    const logIn = () => {
      const token = localStorage.getItem('jwtToken');
      if(token != null){
        setIsLoggedIn(true);
        const decodedToken = jwtDecode<JwtPayLoad>(token);
        console.log(decodedToken);
        setuserName(decodedToken.login)
      }
    }
    const logOut = () => setIsLoggedIn(false);
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token != null) {
          setIsLoggedIn(true);
          const decodedToken = jwtDecode<JwtPayLoad>(token);
          setuserName(decodedToken.login)
        }
    }, []);
    return { isLoggedIn, username,logIn, logOut };
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLoggedIn, username, logIn, logOut } = useAuth();
  return (
    <AuthContext.Provider value={{ isLoggedIn,username, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
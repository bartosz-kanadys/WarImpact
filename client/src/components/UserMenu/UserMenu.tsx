import { routes } from "../../routes";
import { MenuNavLink } from "../../ui/MenuNavLink";
import { useAuthContext } from "../Auth/AuthContext";

export const UserMenu = () => {
    const { isLoggedIn, logOut } = useAuthContext();
    //const [userName, setuserName] = useState("");
    const handleLogout = () => {
        localStorage.removeItem('jwtToken');  // Remove the JWT token
        logOut()
    }

    return (
        <>
            {isLoggedIn ? (
                <>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <MenuNavLink
                            to={routes.REGISTRATIONFORM.path}
                            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                    >Registration</MenuNavLink>
                    <MenuNavLink
                            to={routes.LOGINFORM.path}
                            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >Login</MenuNavLink>
                </>
            )}
    </>
  );
}
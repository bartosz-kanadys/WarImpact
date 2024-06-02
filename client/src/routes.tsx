import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { LoginFormPage,  HomePage,RegistrationFormPage,DownloadPage,ChartPage } from './components/Pages'

export const routes = {
  HOME: {
    path: "/",
    // title:
  },
  REGISTRATIONFORM: {
    path: "/register",
  },
  LOGINFORM: {
    path: "/login",
  },
  DOWNLOADPAGE: {
    path: "/download",
  },
  CHARTPAGE: {
    path: "/charts",
  },
};

export const router = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <Layout />,
    children: [
      {
        path: routes.HOME.path,
        element: <HomePage />,
      },
      {
        path: routes.REGISTRATIONFORM.path,
        element: <RegistrationFormPage />,
      },
      {
        path: routes.LOGINFORM.path,
        element: <LoginFormPage />,
      },
      {
        path: routes.DOWNLOADPAGE.path,
        element: <DownloadPage />,
      },
      {
        path: routes.CHARTPAGE.path,
        element: <ChartPage />,
      },
    ],
  },
]);
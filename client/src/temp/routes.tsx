import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { LoginFormPage } from './Pages/LoginFormPage'
import { DataFetcherPage } from './Pages/DataFetcherPage'
import { HomePage } from './Pages/HomePage'
import { RegistrationFormPage } from './Pages/RegistrationFormPage'

export const routes = {
  HOME: {
    path: "/",
    // title:
  },
  DATAFETCHER: {
    path: "/counter",
  },
  REGISTRATIONFORM: {
    path: "/generator",
  },
  LOGINFORM: {
    path: "/registration",
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
        path: routes.DATAFETCHER.path,
        element: <DataFetcherPage />,
      },
      {
        path: routes.REGISTRATIONFORM.path,
        element: <RegistrationFormPage />,
      },
      {
        path: routes.LOGINFORM.path,
        element: <LoginFormPage />,
      },
    ],
  },
]);
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LoginFormPage } from './components/Pages/LoginFormPage'
import { DataFetcherPage } from './components/Pages/DataFetcherPage'
import { HomePage } from './components/Pages/HomePage'
import { RegistrationFormPage } from './components/Pages/RegistrationFormPage'

export const routes = {
  HOME: {
    path: "/",
    // title:
  },
  DATAFETCHER: {
    path: "/datafetcher",
  },
  REGISTRATIONFORM: {
    path: "/registrationform",
  },
  LOGINFORM: {
    path: "/loginform",
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
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { LoginFormPage, DataFetcherPage, HomePage,RegistrationFormPage } from './components/Pages'

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
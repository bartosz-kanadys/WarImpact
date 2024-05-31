import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { LoginFormPage, DataFetcherPage, HomePage,RegistrationFormPage,DownloadPage } from './components/Pages'

export const routes = {
  HOME: {
    path: "/",
    // title:
  },
  DATAFETCHER: {
    path: "/datafetcher",
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
      {
        path: routes.DOWNLOADPAGE.path,
        element: <DownloadPage />,
      },
    ],
  },
]);
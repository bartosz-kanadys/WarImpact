import { RouterProvider } from "react-router-dom";
import { router } from "./routes"
import { AuthContextProvider } from "./components/Auth/AuthContext";
function App() {

  return (
    <>
     <div className="App">
      <main>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
      </main>
    </div>
    </>
  )
}

export default App

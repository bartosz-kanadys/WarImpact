
import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./temp/routes"
function App() {

  return (
    <>
     <div className="App">
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
    </>
  )
}

export default App

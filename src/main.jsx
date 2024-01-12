import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Mercury from "./pages/Mercury.jsx"
import Venus from "./pages/Venus.jsx"
import Earth from "./pages/Earth.jsx"
import Mars from "./pages/Mars.jsx"
import Jupiter from "./pages/Jupiter.jsx"
import Saturn from "./pages/Saturn.jsx"
import Uranus from "./pages/Uranus.jsx"
import Neptune from "./pages/Neptune.jsx"
import "./index.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Mercury />} />
      <Route path="/venus" element={<Venus />} />
      <Route path="/earth" element={<Earth />} />
      <Route path="/mars" element={<Mars />} />
      <Route path="/jupiter" element={<Jupiter />} />
      <Route path="/saturn" element={<Saturn />} />
      <Route path="/uranus" element={<Uranus />} />
      <Route path="/neptune" element={<Neptune />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

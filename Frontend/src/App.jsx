import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Book from "./Pages/Book"
import OurBoats from "./Pages/OurBoats"
import Packages from "./Pages/Packages"
import About from "./Pages/About"
import Gallery from "./Pages/Gallery"
import Layout from "./Layout/Layout"
import Error404 from "./Component/Error404"
import Login from "./Admin/Login"
import AdminLayout from "./Layout/AdminLayout"
import DashboardLayout from './Layout/DashboardLayout'
import Dashboard from "./Admin/Dashboard"
import AdminPackage from "./Admin/Component/AdminPackage"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book" element={<Book />} />
          <Route path="ourboats" element={<OurBoats />} />
          <Route path="package" element={<Packages />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<DashboardLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="adminpackage" element={<AdminPackage />} />
          </Route>
        </Route>
      </>
    )
  );
  return (
    <div className="w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

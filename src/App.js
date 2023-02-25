import React from "react";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import NavLayout from "./components/NavLayout";
import HelpComponent from "./components/HelpComponent";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      
      <Route path="help" element={<HelpComponent />}>
       <Route path="faq" element={<FAQ />} />
          
      </Route>
    </Route>
  )
);

class App extends React.Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}

export default App;

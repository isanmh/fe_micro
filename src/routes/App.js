import { Navigate, Route, Routes } from "react-router-dom";
import Contacts from "../components/Contacts";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import About from "../pages/About";
import Header from "../components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Contacts />} />
        {/* CRUD */}
        {/* <Route path="products" element={<ProductList />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="edit/:id" element={<EditProduct />} /> */}
        {/* <Route path="*" element={<NotFound/>}/> */}
        {/* redirect to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;

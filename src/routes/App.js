import { Route, Routes } from "react-router-dom";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import ContactsList from "../components/crud/ContactsList";
import AddContact from "../components/crud/AddContact";
import EditContact from "../components/crud/EditContact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        {/* <Route path="service" element={<Service />} /> */}
        {/* CRUD */}
        <Route path="contacts" element={<ContactsList />} />
        <Route path="add" element={<AddContact />} />
        <Route path="contacts/edit/:id" element={<EditContact />} />
        <Route path="*" element={<NotFound />} />
        {/* redirect to home */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}

export default App;

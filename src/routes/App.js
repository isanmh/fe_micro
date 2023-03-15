import { Route, Routes } from "react-router-dom";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import IndexList from "../components/crud/IndexList";
import Create from "../components/crud/Create";
import Edit from "../components/crud/Edit";
import ContactsList from "../components/crud/bulma/ContactsList";
import AddContact from "../components/crud/bulma/AddContact";
import EditContact from "../components/crud/bulma/EditContact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        {/* CRUD bulma */}
        <Route path="/contacts" element={<ContactsList />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/contacts/edit/:id" element={<EditContact />} />
        {/* bootstrap 5 */}
        <Route path="/contacts-list" element={<IndexList />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        {/* redirect to home */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}

export default App;

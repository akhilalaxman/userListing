import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListing from "./containers/usersListing";
import UserDetails from "./containers/usersListing/UserDetails";
import Users from "./containers/usersListing/Users";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserListing />} exact />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

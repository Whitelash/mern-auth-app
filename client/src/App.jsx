import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp.jsx"
import Profile from "./pages/Profile.jsx"
import Header from "./components/Header.jsx"


export default function App() {
  return <BrowserRouter>
  {/* header appears in all pages */}  
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/profile" element={<Profile />} />

  </Routes>
  </BrowserRouter>
  
}

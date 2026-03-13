
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import Accueil from './pages/Accueil';
import Article from './pages/Article';
import Panier from './pages/Panier';
import Login from './pages/Login';
import  Header  from './components/Header';
import FormImage from './pages/FormImage';
import Media from './pages/Media';
import FormManga from './pages/FormManga';
import FormRegister from './pages/FormRegister';
import Mentions from "./pages/Mentions";
import Footer from "./components/Footer";
import Conditions from "./pages/Conditions";
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";
export default function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/panier" element={<Panier />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<FormRegister />}/>
        <Route path="/addimage" element={<FormImage />} />
        <Route path="/addarticle" element={<FormManga />} />
        <Route path="/media" element={<Media />} />
        <Route path="/article/:id" element={<Article />}/>
        <Route path="/mentions"    element={<Mentions />}/>
        <Route path="/conditions" element={<Conditions />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/a-propos" element={<Apropos />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}



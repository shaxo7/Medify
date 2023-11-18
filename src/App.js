
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import HomeMedicalSupplies from './HomeMedicalSupplies';
import Homepages from './Homepages';
import Shop from './Shop';
import Pages from './Pages';
import Blog from './Blog';
import Contact from './Contact';
import Hidden from './Hidden';
import Carousal from './Carousal';
import UpArrowButton from './UpArrow';
import Error from './Error';
import './Media.css';
import LoginForm from './HomeMedicalSupplies';

function App() {
  

  return (
    
    <BrowserRouter>
    
    <div className="app-wrapper">
      
      <Hidden />
      <Header />
      <Navbar />
      <UpArrowButton />
      <Routes>
        <Route path='/' element={<Carousal />} />
        <Route path='/HomeMedicalSupplies' element={<HomeMedicalSupplies />} />
        <Route path='/Homepages' element={<Homepages />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Pages'element={<Pages />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Error404' element={<Error />} />
        <Route path="/login" component={<LoginForm />} />
        <Route path="/carousel" component={<Carousal />} />
      </Routes>
      
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;

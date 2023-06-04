import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './home.js';
import Contact from './contact.js';
import About from './about.js';
import Services from './services.js';
import Products from './products.js';
import './style.css';
function APP() {
    return (
        <>
            <div className="header">
                <h1>XYZ hotel</h1>
                <BrowserRouter>
                    <div className="navbar">
                        <nav className="navbar-nav">
                            <Link to="/"><button className="btn btn-link">Home</button></Link>
                            <Link to="/products"><button className="btn btn-link">Products</button></Link>
                            <Link to="/services"><button className="btn btn-link">Services</button></Link>
                            <Link to="/about"><button className="btn btn-link">About</button></Link>
                            <Link to="/contact"><button className="btn btn-link">Contact</button></Link>
                        </nav> 
                    </div>    
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/services" element={<Services />} />    
                        <Route path="/about" element={<About/>} /> 
                        <Route path="/contact" element={<Contact/>} />      
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default APP 
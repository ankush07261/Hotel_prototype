import './style.css';
const bottles = "https://imgs.search.brave.com/M03U4oRO0Mj63Snrj_tJxdXWY5GIX-GnVWXjOWKZEms/rs:fit:920:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/TzV2Zi1QZEF5OUwt/aDIzTUtqTmFRSGFE/MCZwaWQ9QXBp";
const utensils = "https://imgs.search.brave.com/BUhlrDCRlksADxjd_YyweZ8RDMtlchr3qcXVXCITcjc/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/MnFmbTVONGlkaUdL/NlhLampkZlpnSGFF/SyZwaWQ9QXBp";
const apliance = "https://imgs.search.brave.com/nDWT3w_7YPTS-rLfahGPhpgzmhCQ3GprDABFtyIiprI/rs:fit:832:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/bERNM3ZMWjh3SV84/Yks3aGZYTi13SGFF/TyZwaWQ9QXBp";
const tupperbox = "https://imgs.search.brave.com/RceiCvRGFs9DfON6zin6ejCujV4NeYQRIo8bybD0tmg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/S0ItMklhX0N2SHcz/WDJXMDQwQnhnSGFF/SyZwaWQ9QXBp";

function Products() {
    return (
        <>
            <h1>Our Products</h1>
            <div className="product-container card-container">
                <div className="product-card card">
                    <img src={bottles} className="image card" alt="water bottles" />
                    
                    <p className="product-description description">water bottles<br/><br/>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="product-card card">
                    <img src={utensils} className="image" alt="utensils" />
                    
                    <p className="product-description description">utensils<br/><br/>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="product-card card">
                    <img src={apliance} className="image" alt="appliances" />
                    
                    <p className="product-description description">kitchen appliances<br/><br/>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="product-card card ">
                    <img src={tupperbox} className="image" alt="lunch boxes" />
                    
                    <p className="product-description description">lunch boxes<br/><br/>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
            </div>
        </>
    )
}

export default Products
import './style.css';
const booking = "https://imgs.search.brave.com/Y6fYXVpdK91Y1pgKThxmMkim4IoxhPzWGa_MYFOybIw/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/TlF5Y3BrODA0eGNQ/aHJKMUpRTmhBSGFF/SyZwaWQ9QXBp";
const catering = "https://imgs.search.brave.com/iHVZofpcm4hGRMUDYGqmQc9QvURCXPb1yekz9S17k6g/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/WHNvU3JXZ2QxUUF3/Q1N3aVBxd29BSGFF/SyZwaWQ9QXBp";
const home = "https://imgs.search.brave.com/0EN62vGsuXJUwICo2TO9Nf9FbDVTnrHrSpWXiYJSq30/rs:fit:741:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/NlpWRld2a3NCSXZx/Y0R4TFJfSWhRSGFF/diZwaWQ9QXBp";
const take = "https://imgs.search.brave.com/5D-oEAQrZoA_VwoeNm4ftJ2CLVhgm1i1tNMvvpGAU3k/rs:fit:684:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/UUVkQlI5Q0dqUmoz/SzFGSHZKMW1nSGFG/SSZwaWQ9QXBp";

function Services() {
    return (
        <>
            <h1>Our services</h1>
            <div className="service-container card-container">
                <div className="service-card card">
                    <img src={booking} className="image" alt="Bookings"/>
                    <p className="service-description description">Bookings<br/><br/>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="service-card card">
                    <img src={catering} className="image" alt="Cetering"/>
                    <p className="service-description description">Cetering<br/><br/>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="service-card card">
                    <img src={home} className="image" alt="Home delivery"/>
                    <p className="service-description description">Home delivery<br/><br/>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="service-card card">
                    <img src={take} className="image" alt="Order and take home"/>
                    <p className="service-description description">Order and take home<br/><br/>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
            </div>
        </>
    )
}

export default Services
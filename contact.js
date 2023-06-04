import './style.css';

function Contact() {
    return (
        <div className="contact">
            <h1>Contact us...</h1>
            <p>Fill out the below form to get a mail or a call from us.
                <br />
                We would be glad to rech out to you
            </p>
            <div className="form-container">
                <form className="form">
                    Name:<input type="text" className="form-name" placeholder="Name"></input>
                    <br /><br />
                    Email:<input type="email" className="form-email" placeholder="Email"></input>
                    <br /><br />
                    Phone number:<input type="number" className="form-phone" placeholder="0000000000"></input>
                    <br /><br />
                    Your reason to Contact us:
                    <select className="form-reason">
                        <option></option>
                        <option>-room booking</option>
                        <option>-for a bulk order</option>
                        <option>-any complaints</option>
                        <option>-other</option>
                    </select>
                    <br/><br />
                    <button type="submit" className="btn btn-submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact
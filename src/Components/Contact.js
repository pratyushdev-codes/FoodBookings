import React from 'react';
import './Contact.css'; // Import CSS file for styling
import NavbarSPL from './NabarSPL';


const Contact = () => {
    return (

        <div>
            <NavbarSPL/>
          
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
       textAlign:"center"
      }}>Contact Info</h2>
              <div style={{ justifyContent: "center", display: "flex", textAlign: "center" }}>
            <div className="card" style={{ width: "32rem", borderRadius: "20px" }}>
                <div className="card-body" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        <h5 className="card-title" style={{ fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign:"center"}}>Gujarat State Enquiries</h5>
                        <p className="card-text">9327692740, 6358588888, 9773496641</p><br/>
                        <a href='https://wa.me/+919327692740?text=urlencodedtext' className="btn btn-primary" style={{ display: "inline-flex", borderRadius: "20px", width: "20rem", alignItems: "center" }}>
                            <div style={{ flex: "0 0 auto", marginRight: "10px" }}>
                                <img src="./images/whatsapplogo.png" style={{ borderRadius: "50%", width: "2rem", height: "2rem" }} alt="WhatsApp Logo" />
                            </div>
                    Chat with us
                        </a>
                    </div>
                </div>
            </div>
        </div>

    <br/>
    <br/>
    <div style={{ justifyContent: "center", display: "flex", textAlign: "center" }}>
            <div className="card" style={{ width: "32rem", borderRadius: "20px" }}>
                <div className="card-body" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        <h5 className="card-title" style={{ fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign:"center"}}>Telangana, Andhra Pradesh & Karnataka State Enquiries</h5>
                        <p className="card-text">9327692740, 6358588888, 9773496641</p><br/>
                        <a href='https://wa.me/+918867533686?text=urlencodedtext' className="btn btn-primary" style={{ display: "inline-flex", borderRadius: "20px", width: "20rem", alignItems: "center" }}>
                            <div style={{ flex: "0 0 auto", marginRight: "10px" }}>
                                <img src="./images/whatsapplogo.png" style={{ borderRadius: "50%", width: "2rem", height: "2rem" }} alt="WhatsApp Logo" />
                            </div>
                    Chat with us
                        </a>
                    </div>
                </div>
            </div>
        </div>

       
        </div>
    );
}

export default Contact;

import React from 'react'
import { Link } from 'react-router-dom'

function Restaurants() {
  return (
    <div>


            <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
       textAlign:"center"
      }}>Restaurants available:</h2>
              <div style={{ justifyContent: "center", display: "flex", textAlign: "center" }}>
            <div className="card" style={{ width: "32rem", borderRadius: "20px" }}>
            <img src="./images/UB.jpeg"  class="card-img-top" alt='..'/>
                <div className="card-body" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        <h5 className="card-title" style={{ fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign:"center"}}>Under Belly</h5>
        <br/>
        <Link to="/Registration">
                        <button className="btn btn-primary" style={{ display: "inline-flex", borderRadius: "20px", width: "20rem", alignItems: "center" }}>
                            <div style={{ flex: "0 0 auto", marginRight: "10px" }}>
                               
                            </div>
                  Browse Menu
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    <br/>
    <br/>

    <div style={{ justifyContent: "center", display: "flex", textAlign: "center" }}>
            <div className="card" style={{ width: "32rem", borderRadius: "20px" }}>
            <img src="./images/mayrui.jpeg"  class="card-img-top" alt='..'/>
                <div className="card-body" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  
                    <div>
                        <h5 className="card-title" style={{ fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign:"center"}}>Mayuri</h5>
        <br/>
        <Link to="/Registration">
                        <button className="btn btn-primary" style={{ display: "inline-flex", borderRadius: "20px", width: "20rem", alignItems: "center" }}>
                            <div style={{ flex: "0 0 auto", marginRight: "10px" }}>
                               
                            </div>
                  Browse Menu
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ justifyContent: "center", display: "flex", textAlign: "center" }}>
            <div className="card" style={{ width: "32rem", borderRadius: "20px" }}>
            <img src="./images/Visa.jpeg"  class="card-img-top" alt='..'/>
                <div className="card-body" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              
                    <div>
                        <h5 className="card-title" style={{ fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign:"center"}}>Visa Mart</h5>
        <br/>
        <Link to="/Registration">
                        <button className="btn btn-primary" style={{ display: "inline-flex", borderRadius: "20px", width: "20rem", alignItems: "center" }}>
                            <div style={{ flex: "0 0 auto", marginRight: "10px" }}>
                               
                            </div>
                  Browse Menu
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>




    <br/>


        </div>
  )
}

export default Restaurants
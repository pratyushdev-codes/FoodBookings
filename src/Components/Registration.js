import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import displayRazorpay from "./PaymentGateway";
import { BrowserRouter } from 'react-router-dom';

import NavbarSPL from './NabarSPL';
import Navbar from './Navbar';


function Registeration() { 

    const [paymentSuccessful, setPaymentSuccessful] = useState(false);
    const [paymentId, setPaymentId] = useState(null); 
    const navigate = useNavigate();
    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };
    useEffect(() => {
      loadScript("https://checkout.razorpay.com/v1/checkout.js");
    });
    
    function validateDateOfBirth(dateString) {
      // Parse the date string into a Date object
      const parts = dateString.split('-');
      const dob = new Date(parts[0], parts[1] - 1, parts[2]); // Year, month (0-indexed), day
      // Check if the date falls within the specified range
      const minDate = new Date('2005-01-01');
      const maxDate = new Date('2024-12-31');
      return dob >= minDate && dob <= maxDate;
    }
    
  
  
    const headingStyle = {
      fontFamily: "PT sans",
      color: "#65A0FB",
      fontSize: "30px",
      fontWeight: "bold",
      textAlign: "center",
    };
    const declarationStyle = {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px', //Adjust as needed
    };
    const bodyStyle = {
      textAlign: "center",
      fontSize: "15px",
      fontWeight: "bold",
      color: 'rgba(0, 0, 0, 0.7)',
    };
    const formStyle = {
      borderRadius: "20px",
     
    }
  
  
  
  
    function submitForm(formData) {
      fetch('https://script.google.com/macros/s/AKfycbygtIXfBULX-1vHPfcAeafa2WhNyJq79Cvj_hSXVi8PV71i8jxlgTLrXk9Y1t7x6pRf/exec', {
        method: 'POST',
        body: formData,
      }).then(() => {
        console.log('Data Submitted');
        
      });
    }
  

    useEffect(() => {
    
      const savePaymentId = (id) => {
        console.log("Payment ID saved:", id);
     
      };
  
    
      if (paymentId) {
        savePaymentId(paymentId);
      }
    }, [paymentId]); 
  



    function submit(e) {
      e.preventDefault();
      const formEle = document.querySelector('.row.g-3.needs-validation');
      const formData = new FormData(formEle);
    
      // Checking all required fields
      let isValid = true;
    // document.getElementById('submit').setAttribute("disabled","disabled");

    // document.getElementById('submit').textContent = "Processing";

      //  first name
      const firstNameValue = formData.get("Firstname");
      if (!firstNameValue || firstNameValue.trim().length < 2) {
        alert("Enter a valid first name");
        isValid = false;
      }
    
      // Validation for Last Name
      const lastNameValue = formData.get("Lastname");
      if (!lastNameValue || lastNameValue.trim().length < 2) {
        alert("Enter a valid last name");
        isValid = false;
      }
    
      // Validation for Email
      const emailValue = formData.get("Email");
      if (!emailValue || emailValue.trim().length < 2) {
        alert("Enter a valid email ID");
        isValid = false;
      }
    
      // Validation for Adhaar Card Number

    
 
    
      // Validation for Primary Phone Number
      const primaryPhoneValue = formData.get("Primaryphoneno");
      if (!primaryPhoneValue || primaryPhoneValue.trim().length !== 10) {
        alert("Enter a valid Primary Phone Number");
        isValid = false;
      }
    
      // Validation for Alternate Phone Number
      const alternatePhoneValue = formData.get("Secondaryphoneno");
      if (alternatePhoneValue && alternatePhoneValue.trim().length !== 10) {
        alert("Enter a valid Alternate Phone Number");
        isValid = false;
      }
    
      // Validation for Address
  
    
   if(!isValid){
    document.getElementById('submit').removeAttribute("disabled");

    document.getElementById('submit').textContent = "Continue To Payment";
   }

      // If all conditions are met, submitting the form
      const fetchData = async () => {
        const url = 'https://msdca-backend.onrender.com/ping';
        const controller = new AbortController();
        const timeoutMillis = 5000; // Set the timeout duration in milliseconds (adjust as needed)
      
        // Set up a timeout for the fetch request
        const timeoutId = setTimeout(() => controller.abort(), timeoutMillis);
      
        try {
          const response = await fetch(url, { signal: controller.signal });
      
          // Clear the timeout since the request completed within the timeout
          clearTimeout(timeoutId);
      
          //Check if Backend Server is active
          console.log(response);
          if(response.ok){
            if (isValid) {
              displayRazorpay((paymentId, orderId) => {
                if (paymentId && orderId) {
                  setPaymentSuccessful(true);
                  setPaymentId(paymentId);
                  formData.append("PaymentId", paymentId);
                  submitForm(formData); 
                  setPaymentId(paymentId);
               
                  navigate('/Registered', { state: { paymentId } }); // Pass paymentId as a prop
                
                
                } else {
                  alert('Payment not successful. Please complete the payment.');
                }
              });
            } 
          }
          else{
            //Execute when backend server is inactive
          alert("Payment Server Is Down, Please Try After Sometime.");
          }
          
        } catch (error) {
          //Execute when backend server is inactive
          alert("Payment Server Is Down, Please Try After Sometime.");
        }
      };
      
      // Call the fetchData function
      fetchData();
      

    };
    
    

    
    








  return (
    <div>
<Navbar/>

<div>
        <img src="./images/Food Services.png" style={{width:"100%", height:"auto", borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px"}}/>
      </div>
<br />
      <br />
      <h2 style={headingStyle}>Select desired food item from the menu</h2>
      <br />
      <br />
      <form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required  
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required  

            />
          </div>
        </div>

                {/* Phone number */}
                <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label" >
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            placeholder="Enter your phone number"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


{/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Starters
          </label>
          <select id="inputState" className="form-select" name="Starters" required style={formStyle}>
            <option selected>Select starters</option>
            <option>Paneer Tikka - ₹158</option>
            <option>French Fries - ₹95</option>
            <option>Chicken Nuggets - ₹152</option>
            <option>Chicken Tikka - ₹168</option>
          </select>
        </div>

{/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Beverages
          </label>
          <select id="inputState" className="form-select" required name="Beverages" style={formStyle}>
            <option selected>Soft Drinks / Tea / Coffee</option>
            <option>Ginger Tea - ₹15</option>
            <option>Coffee - ₹15</option>
            <option>Chocolate Milkshake - ₹90</option>
            <option>Kitkat Milkshake - ₹95</option>
            <option>Lime Mint Cooler - ₹95</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Sandwich / Burger
          </label>
          <select id="Sandwich" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Cheese Sandwich - ₹137</option>
            <option>Paneer Sandwich - ₹152</option>
            <option>Chicken Sandwich - ₹163</option>
            <option>Chicken Burger - ₹163</option>
          </select>
        </div>



        {/* Dominant Hand
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Select Beverages
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Soft Drinks / Tea / Coffee </option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div> */}
        {/* Bowler Style
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
           Night Canteen Menu
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div> */}


                             {/* Email Id */}
                <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@vitbhopal.ac.in'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div> */}
        {/* Describe
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div> */}
        {/* Medical History
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div> */}
       {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Block Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{borderRadius:"20px", width:"80%"}} rows="3"
            
           
          ></textarea></center>
        </div>
        {/* Consent form  */}
        <br />
        <div className="container">
          <style>
            {`
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }
      .heading {
        text-align: center;
        margin-bottom: 20px;
        font-family: 'PT Sans', sans-serif;
        color: #65A0FB;
        font-weight: bold;
      }

      .text {
        text-align: left;
        margin-bottom: 15px;
        font-size: 15px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);
      }
    `}
       </style>
          <h2 className="heading" style={headingStyle}>Terms, Conditions & Code of Conduct</h2>
        
          <div className="text">
            <p>1) Orders can only be placed using the official college canteen food delivery entry form.</p>
          </div>
          <div className="text">
          <p>2) Users must ensure that all mandatory fields in the entry form are accurately filled, including a valid delivery address.</p>
          </div>
        
          <div className="text">
          <p>3) The college canteen will not be liable for any loss, damage, or inconvenience caused due to factors beyond its control, including but not limited to traffic conditions, natural disasters, or unforeseen events.</p>
          </div>
      
          <div className="text">
          <p>4) The money is non-refundable.</p>
        {/* Checkboxes */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="form-check">
            <input className="form-check-input"  type="checkbox" value="" id="flexCheckIndeterminate" required />
            <label className="form-check-label" htmlFor="flexCheckIndeterminate" style={{ marginLeft: '10px' }}>
              I accept all the Terms and Conditions.
            </label>
          </div>
        </div>
          </div>
        </div>


  
          
    
        <div class="card container text-center" style={{borderRadius:"20px"}}>
<div class="card-body">
<h5 class="card-title" style={headingStyle}>Payment Details</h5>




<p style={{fontSize:"13px"}}>You will be redirected to the next page automatically on successful payment.<br/>If any mode of Payment is not working , try with another mode of Payment.<br/>
Kindly do not exit the gateway while payment is being done.<br/>Make sure you fill all the mandatory fields in the form.</p>

</div>
<br/>
</div>
<div className="col-12 text-center">
  <button 
    className="btn btn-primary"
    type="submit"
    value="submit"
    id="submit"
    onClick={(e) => submit(e)}
    noValidate
 
    style={{borderRadius:"20px", backgroundColor:"#036EFD"}}
  >
    Continue to Payment
  </button>
</div>

        
      </form>
      
      <br/>

    </div>
   
   
  );
}

export default Registeration;
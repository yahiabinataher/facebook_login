import React from 'react'
import { useState } from 'react'
import Meta from '../../component/meta/Meta'
import "./Auth.scss"
import { Link } from 'react-router-dom'
import Modal from '../../component/modal/Modal'
import { FaQuestionCircle } from "react-icons/fa";
import { date, mounth } from '../../faker/faker';
import { createToast } from '../../helpers/helpers'




const Auth = () => {
  const [modal,setModal] = useState(false)

 const years = Array.from({length: new Date().getFullYear() - 1900} , (_,i) => 1901 + i).reverse()
 const [input,setInput]= useState({
  frist_name:"",
  sur_name:"",
  moe:"",
  password:"",
  day:"",
  month:"",
  year:"",
  gender:""
})

const handleInputChange = (e) =>{
  setInput((prevState) =>({
    ...prevState,
    [e.target.name]: e.target.value
  }))
}

//submit 
const handleUserRegister = (e) =>{
  e.preventDefault()
  //validation
  if(!input.frist_name || !input.sur_name ||!input.moe || !input.password ){
    createToast("All Fiends Are Required")
  }else{
    createToast("Data Stable","success")
  }
}
const [border,setBorder]= useState({
  frist_name:true,
  sur_name:true,
  moe:true,
  password:true,
  day:true,
  month:true,
  year:true,
  gender:true
})

const handleBlur = (e) => {
  if( e.target.value == ""){
    setBorder((prevState) =>({
      ...prevState,
      [e.target.name]:false
    }))
  }else{
    setBorder((prevState) =>({
      ...prevState,
      [e.target.name]:true
    }))
  }
 
}
  return (
    <>
    <Meta title= "facebook - login and sign in"/ >
    {modal && <Modal hide={setModal}>
      <form action="" className='sign_form' onSubmit={handleUserRegister}>
       <div className='fullName'>
       <input className={border.frist_name ? "" : "border_red"} type="text" name='frist_name' value={input.frist_name} onChange={handleInputChange} onBlur={handleBlur} placeholder='FristName' />

        <input className={border.sur_name ? "" : "border_red"} type="text" name='sur_name' value={input.sur_name} onChange={handleInputChange } onBlur={handleBlur} placeholder='SurName' />

       </div>

       <input className={border.moe ? "" : "border_red"} type="text" name='moe' value={input.moe} onChange={handleInputChange} onBlur={handleBlur} placeholder='Modail Number or email address' />

       <input className={border.password ? "" : "border_red"} type="password" name='password' value={input.password} onChange={handleInputChange} onBlur={handleBlur} placeholder='Password' />


       <div className="date">
        <span>Date of birth <FaQuestionCircle/></span>
        <div className="data_box">
          
          <select name='day'  onChange={handleInputChange} >
            <option value="">Day</option>
            {date?.map((item,index) =>  <option value={item} key={index}  selected={new Date().getDate() == item ? true : false}   >{item}</option> )}
          </select>

          <select name='month' onChange={handleInputChange}  >
          <option value="">Month</option>
          {mounth?.map((item,index) =>  <option value={item} key={index} selected={new Date().getMonth() == index ? true : false}  >{item}</option> )}
          </select>
          
          <select name='year' onChange={handleInputChange}  >
            <option value="">Year</option>
          {years?.map((item,index) =>  <option key={index} value={item} selected={new Date().getFullYear() == item ? true : false}>{item}</option> )}
          </select>
        </div>
       </div>
       <div className="gender">
       <span className='gender_title'>Gender <FaQuestionCircle/></span>
          <div className="gender_box">
              <label htmlFor="">
                <span>Female</span>
                <input name='gender' value="Female" onChange={handleInputChange} type="radio" />
              </label>
              <label htmlFor=""> 
                <span>Male</span>
                <input  name='gender' value="Male" onChange={handleInputChange}  type="radio" />
              </label>
              <label htmlFor="">
                <span>Custom</span>
                <input  name='gender' value="Custom" onChange={handleInputChange}  type="radio" />
              </label>
        
       </div>
       </div>
       {input.gender === "Custom" ? <div className='customGender'>
       <select className='pronoun' name="" id="">
        <option value="">Select your pronoun</option>
        <option value="">Select your pronoun</option>
       </select>
       <span>Your pronoun is visible to everyone.</span>
       <input type="text" placeholder='Gender (Optinal)' />
       </div>: ""}
       
       <p>People who use our service may have uploaded your contact information to Facebook. <span>Learn more.</span></p>
       <p>By clicking Sign Up, you agree to our Terms, <span>Privacy Policy</span> and <span>Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.

</p>
      <button type='submit' className='signUP'>Sign Up</button>
      </form>
      
      </Modal>}
   <div className="auth_area">
    <div className="auth container">
      <div className="auth_left">
        <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
        <h2>Facebook helps you connect and share with the people in your life.</h2>
      </div>
      <div className="auth_right">
        <div className="auth_box">
          <form action="">
            <input type="text" placeholder='Email address or phone number' />
            <input type="password" placeholder='Password' />
            <button className='login_button'  type='submit'>Log in</button>
          </form>
          <Link to="">Forgotten password?</Link>
            <hr />
           <button className='create_button' onClick={() => setModal(true)}> Create new account</button>
        
        </div>
        <p><Link>Create a Page</Link> for a celebrity, brand or business.</p>
        

      </div>
    </div>
   </div>
    </>
  )
}

export default Auth
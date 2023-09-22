import React from 'react'
import '../assets/css/Signup.css';
import { Link } from 'react-router-dom';
const Signup = () => {

  const [formData, setformData] = React.useState({
    FirstName: '',
    LastName: '',
    Email: '',
    newpassword: '',
    confirmPassword:'',
  })
   const handleOnChange = (e) => {
    const [name, value] = [e.target.name, e.target.value]
    // console.log(e.target.value);
    setformData({
      ...formData,
      [name]: value,
    })
  }
  const submitForm = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <div>
      <div className='container'>
        <h2>SIGNUP</h2>
        <form action="" onSubmit={submitForm}>
          <label htmlFor="FirstName">Enter Your FirstName :</label>
          <input
            type="text"
            name="FirstName"
            id="FirstName"
            placeholder="Enter your FirstName"
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="LastName">Enter Your LastName :</label>
          <input
            type="text"
            name="LastName"
            id="LastName"
            placeholder="Enter your LastName"
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="Email">Enter your Email :</label>
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="Enter your Email"
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="newpassword">Enter your Password :</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your new Password "
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="confirmPassword"></label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re-Enter the same password"
            onChange={handleOnChange}
          />
          <br />
          <Link to="/login"><button type="submit">Register</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Signup;
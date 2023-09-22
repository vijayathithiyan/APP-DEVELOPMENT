import * as React from 'react'
import '../assets/css/Login.css';
const Login = () => {
  const [formData, setformData] = React.useState({
    username: '',
    password: '',
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
      <div className='container-login'>
        <h2>LOGIN </h2>
        <form onSubmit={submitForm}>
          <label htmlFor="username">Enter the UserName: </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleOnChange}
            placeholder="Enter userName"
          />
          <br />
          <label htmlFor="password">Enter the password :</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleOnChange}
            placeholder="Enter the password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
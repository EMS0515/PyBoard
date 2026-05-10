function Register() {
  
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle registration logic here
    }
  
    return (
    <div className="register">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
        <a href="/login" type="buttton">Login</a>
    </div>
  )
}

export default Register

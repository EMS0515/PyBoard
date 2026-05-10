import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    //need database connection to verify login credentials, for now just navigate to dashboard
    navigate("/dashboard")
  }

  return (
    <div className="login">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <a href="/register" type="buttton">Register</a>
    </div>
  )
}

export default Login
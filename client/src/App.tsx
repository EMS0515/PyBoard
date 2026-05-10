import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import PublicDash from './pages/PublicDash'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const ProtectedRoute = () => {
  const isLoggedIn = false

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicDash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
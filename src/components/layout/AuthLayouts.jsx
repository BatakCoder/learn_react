import { Link } from 'react-router-dom'
import FormLogin from '../fragments/FormLogin'

const AuthLayouts = ({ children, title }) => {
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
      <p className="font-medium text-slate-600 mb-2">
        Welcome, please enter your details
      </p>
      {children}
      {title === 'login' ? (
        <p className="text-sm text-center">
          Dont have an account?{' '}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      ) : (
        <p className="text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      )}
    </div>
  )
}

export default AuthLayouts

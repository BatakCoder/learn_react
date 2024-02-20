import FormLogin from '../components/fragments/FormLogin'
import AuthLayouts from '../components/layout/AuthLayouts'

const LoginPages = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <AuthLayouts title="login">
        <FormLogin />
      </AuthLayouts>
    </div>
  )
}

export default LoginPages

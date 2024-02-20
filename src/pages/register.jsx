import React from 'react'
import FormRegister from '../components/fragments/FormRegister'
import AuthLayouts from '../components/layout/AuthLayouts'

const RegisterPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <AuthLayouts title={'Register'}>
        <FormRegister />
      </AuthLayouts>
    </div>
  )
}

export default RegisterPage

import React from 'react'
import Inputs from '../elements/Inputs'
import Buttons from '../elements/Buttons'

const FormRegister = () => {
  return (
    <form action="">
      <Inputs
        name={'fullName'}
        placeholder={'Enter Your Full Name'}
        type={'text'}
      >
        Full Name
      </Inputs>
      <Inputs name={'email'} placeholder={'Enter Your Email'} type={'email'}>
        Email
      </Inputs>
      <Inputs
        name={'password'}
        placeholder={'Enter Your Password'}
        type={'password'}
      >
        Password
      </Inputs>
      <Inputs
        name={'confirmPassword'}
        placeholder={'Confirm Your Password'}
        type={'password'}
      >
        Confirm Password
      </Inputs>
      <Buttons bg="bg-blue-600 w-full">Register</Buttons>
    </form>
  )
}

export default FormRegister

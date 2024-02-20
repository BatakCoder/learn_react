import Buttons from '../elements/Buttons'
import Inputs from '../elements/Inputs'

const FormLogin = () => {
  return (
    <form action="">
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
      <Buttons bg="bg-blue-600 w-full">Login</Buttons>
    </form>
  )
}

export default FormLogin

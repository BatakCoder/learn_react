import Input from './Input'
import Label from './Label'

const Inputs = ({ children, name, placeholder, type }) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{children}</Label>
      <Input name={name} placeholder={placeholder} type={type} />
    </div>
  )
}

export default Inputs

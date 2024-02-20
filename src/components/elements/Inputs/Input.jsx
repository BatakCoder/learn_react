const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      className="text-sm rounded border w-full  px-3 py-2 text-slate-700 placeholder:opacity-50 "
    />
  )
}

export default Input

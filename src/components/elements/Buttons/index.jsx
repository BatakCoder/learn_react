const Buttons = (props) => {
  const { bg = 'bg-black', children } = props
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${bg} text-white`}>
      {children}
    </button>
  )
}

export default Buttons

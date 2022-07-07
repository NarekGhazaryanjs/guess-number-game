const Input = (props) => {
const {propsRef,onChange,placeholder,className} = props;
  return (
    <input  onChange={onChange} ref={propsRef} placeholder={placeholder} className={className} />
  )
}

export default Input
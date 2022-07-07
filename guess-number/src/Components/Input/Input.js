const Input = (props) => {
const {type, propsRef,onChange,placeholder,className} = props;
  return (
    <input type={type}  onChange={onChange} ref={propsRef} placeholder={placeholder} className={className} />
  )
}

export default Input
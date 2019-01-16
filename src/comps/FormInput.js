import React from "react"

const FormInput = props => {
  const { label, name, onChange, value } = props

  return (
    <div>
      <label>
        {label}
        {props.required && <span style={{ color: "red" }}>*</span>}
      </label>
      <br />
      <input name={name} value={value} onChange={onChange} />
    </div>
  )
}

export default FormInput

import React from "react"
import { Link, Redirect } from "react-router-dom"
import FormInput from "../comps/FormInput"

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.location.state.contact.name,
      email: props.location.state.contact.email,
      phone: props.location.state.contact.phone,
      redirectTo: ""
    }
  }

  // state = {
  //   name: this.props.location.state.contact.name,
  //   email: "",
  //   phone: "",
  //   redirectTo: ""
  // }

  // componentDidMount(){
  //   const {name, email, phone} = this.props.location.state.contact
  //   this.setState({
  //     name, email, phone
  //   })
  // }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  editContact = () => {
    const { name, email, phone } = this.state
    const newContact = {
      name,
      email,
      phone,
      id: this.props.location.state.contact.id
    }
    this.props.editContact(newContact)
    this.setState({ redirectTo: "/contacts" })
  }

  render() {
    console.log(this.props.location)
    const contact = this.props.location.state.contact
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} push />
    }

    return (
      <div>
        <h2>Edit Contact</h2>
        <FormInput
          value={this.state.name}
          label="Name"
          onChange={this.onChange}
          name="name"
        />
        <FormInput
          value={this.state.email}
          label="Email"
          onChange={this.onChange}
          name="email"
        />
        <FormInput
          value={this.state.phone}
          label="Contact"
          name="phone"
          onChange={this.onChange}
        />
        <br />
        <button onClick={this.editContact}>Edit Contact</button>
        <br />
        <br />

        <button onClick={this.props.history.goBack}>Cancel</button>
      </div>
    )
  }
}

export default Edit

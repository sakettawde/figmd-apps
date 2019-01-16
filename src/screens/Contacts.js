import React from "react"
import { Link, Redirect } from "react-router-dom"

class Contacts extends React.Component {
  state = {
    redirectTo: "",
    contactToBeViewed: {},
    search: ""
  }

  contactClicked = contact => {
    this.setState({
      redirectTo: "/view",
      contactToBeViewed: contact
    })
  }

  render() {
    if (this.state.redirectTo) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirectTo,
            state: {
              contact: this.state.contactToBeViewed
            }
          }}
          push
        />
      )
    }

    console.log(this.props)

    let contactsToShow = []

    if (this.state.search) {
      contactsToShow = this.props.contacts.filter(contact => {
        if (
          contact.name.includes(this.state.search) ||
          contact.email.includes(this.state.search) ||
          contact.phone.includes(this.state.search)
        ) {
          return true
        }
        return false
      })
    } else {
      contactsToShow = this.props.contacts
    }

    return (
      <div>
        <h2>Contacts</h2>
        <Link to="/add">
          <button>Add</button>
        </Link>
        <br />
        <br />
        <label>Search </label>
        <input
          value={this.state.search}
          onChange={e => this.setState({ search: e.target.value })}
        />
        <ul>
          {contactsToShow.map(contact => (
            <li onClick={() => this.contactClicked(contact)}>
              {contact.name} - {contact.email} - {contact.phone}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Contacts

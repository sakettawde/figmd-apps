import React from "react"
import { Link } from "react-router-dom"

class View extends React.Component {
  render() {
    const contact = this.props.location.state.contact
    return (
      <div>
        <h2>View Contact</h2>
        <h3>{contact.name}</h3>
        <span>{contact.email}</span>
        <br />
        <span>{contact.phone}</span>
        <br />
        <br />
        <Link
          to={{
            pathname: "/edit",
            state: {
              contact
            }
          }}
        >
          <button>Edit</button>
        </Link>
        <br />
        <br />
        <button onClick={this.props.history.goBack}>Go Back</button>
      </div>
    )
  }
}

export default View

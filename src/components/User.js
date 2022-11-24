import React, { Component } from "react";

class User extends Component {
//!1.Yöntem
    //   constructor(props) {
//     super(props);
//     this.onDeleteClick = this.onDeleteClick.bind(this); // delete basılınca şimdi user objesi geliyor
//   }
  onDeleteClick(id,e) { //!  3. yöntem bu da bind işlemi arrow fonk ile yazılırsa
    const {deleteUser} = this.props
    deleteUser(id)
    console.log("ID:",id)
    console.log(this); // undefined geldi kendi classımıza bağlamak lazım bind etmek
  }
  render() {
    const { id, name, email } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button onClick={this.onDeleteClick.bind(this,id)} className="btn btn-danger"> {/*this.onDeleteClick.bind(this) buda bind işlemi 2. yöntem*/} 
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default User;


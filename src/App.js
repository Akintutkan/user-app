import React, { Component} from "react"
import AddUser from './components/AddUser';
import Users from './components/Users';
class App extends Component{
  constructor(){
    super()
    this.state = {
      users: []
    }
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  componentDidMount() { // başlangıç state değeri var sonra component did mount ile bağlandı
    //console.log("ComponentDİd")
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json()) //index.js react strict mode silinirse çift konsol ortadan kalkar
      .then((users) =>
        this.setState(
          () => {
            return { users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  addUser(newUser){
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser)
    this.setState({
      users: updatedUsers
  })}
  deleteUser(id){
    let updatedUsers =this.state.users
updatedUsers = updatedUsers.filter(user => user.id !== id)
// State Direct immutable
this.setState({
  users:updatedUsers
})}
render(){
  return (
    <div className="container">
      <h5> User App</h5>
      <hr/>
      <AddUser addUser = {this.addUser}/> {/* dışarıda oluşturulan Adduser componenti içeri dahil edildi */}
    <hr/>
    <Users deleteUser = {this.deleteUser} users ={this.state.users}/> {/* üstteki users Arrayi buraya users props'u olarak geçirildi state management */}
    </div>
  );
}
}

export default App;

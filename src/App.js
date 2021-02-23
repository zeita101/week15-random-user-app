import { Component } from 'react';
import './App.css';
import { fetchUser } from './services/rando_user';


class App extends Component {

  state = {
    currentUser:
    {
      email: "",
      name: {
        title: "",
        first: "",
        last: "",
      },
      picture: {
        medium: ""
      }

    }
  }
  // async/await
  async componentDidMount() {

    const value = await fetchUser()
    console.log(value)
    this.setState({ currentUser: value.data.results[0] })
    console.log(value)
  }

  refreshUser = async () => {
    const value = await fetchUser()
    console.log(value)
    this.setState({ currentUser: value.data.results[0] })
    console.log(value)
  }


  render() {
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <div className="Header">
          <h1 style={{ textAlign: 'center', color: "#CD5C5C" }}>Random User App 👩🏽 👨🏼 👶🏾</h1>
        </div>
        {/* must use .this when calling outside render() */}
        <div className="button">
          <button style={{
            backgroundColor: '#f08080', border: 'none', color: 'white', padding: '15px 32px', textAlign: 'center',
            texDecoration: 'none', display: 'inlineBlock', fontSize: '18px', margin: '4px 2px', cursor: 'pointer'
          }} onClick={this.refreshUser}>
            Refresh
        </button>
        </div>


        <div className="display-user">
          <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '10%' }} src={this.state.currentUser.picture.medium}></img>
          <h2 style={{ textAlign: 'center' }}>
            {this.state.currentUser.name.title}&nbsp;
            {this.state.currentUser.name.first}&nbsp;
            {this.state.currentUser.name.last}&nbsp;
            </h2>
          <h2 style={{ textAlign: 'center' }}>{this.state.currentUser.email}</h2>

        </div>

      </div>
    );
  }
}
export default App;

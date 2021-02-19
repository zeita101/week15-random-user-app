import { Component } from 'react';
import './App.css';
import { fetchUser } from './services/rando_user';


class App extends Component {

  state = {
    currentUser: null
  }
  // async/await
  async componentDidMount() {

    const value = await fetchUser()
    console.log(value)
    this.setState({ currentUser: value.data.results[0] })
    console.log(value)
  }

  refreshUser = async () => {

  }


  render() {
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <div className="Header">
          <h1 style={{ color: "#CD5C5C" }}>Random User App 👩🏽 👨🏼 👶🏾</h1>
        </div>
        {/* must use .this when calling outside render() */}
        <button onClick={this.refreshUser}>
          Refresh
        </button>


      </div>
    );
  }
}
export default App;

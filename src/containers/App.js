import React, { Component } from 'react'
import CardDeck from '../components/CardDeck';
import loader from '../assets/loader.svg'
import './App.css';
import SearchBox from '../components/SearchBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      search: ''
    }
  }
  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ robots: data }))
      .catch((err) => console.log('ERROR!', err))
  }

  onInputChange = (e) => {
    this.setState({ search: e.target.value })
  }
  render() {
    const { robots, search } = this.state;
    const filteredRobots = robots.filter(val => val.name.toLowerCase().includes(search.toLowerCase()));
    return (!robots.length) ?
      (<div className="App">
        <h1 className="App-header">Robo Friends</h1>
        <SearchBox inputChange={this.onInputChange} />
        <img className="App-loader" src={loader} alt="loading" />
      </div>)
      :
      (<div className="App">
        <h1 className="App-header">Robo Friends</h1>
        <SearchBox inputChange={this.onInputChange} />
        <CardDeck robots={filteredRobots} />
      </div>);
  }
}

export default App;

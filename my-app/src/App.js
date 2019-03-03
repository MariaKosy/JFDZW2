import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    }
  }
  componentDidMount = () => {
    fetch('https://api.randomuser.me/?results=15')
      .then(response => response.json())
      .then(response => {
        const { results  } = response;
        this.setState(
          {
            results,
          }
        )
      })
  }

  render() {
    const { results = [] } = this.state;
    const arrayRes = Array.from(results);
    console.log(results)
    return (
      <div className="app">
        {arrayRes && arrayRes.map(user => {
          return <div>
            <img src={user.picture.large} />
            <div>{user.name.first} {user.name.last}</div>
            <div>{user.email}</div>
          </div>
        })}
      </div>
    );
  }
}

export default App;
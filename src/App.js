import React from 'react';
import Css from 'App.css'
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount(i) {
    axios.get(`https://api.covidtracking.com/v1/states/current.json`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
        <div >
      <ul>
        { this.state.persons.map((person,i) => <li className='colorli' key={i}>{person.state}</li>)}
        { this.state.persons.map((person,i) => <li key={i}>{person.death}</li>)}
        { this.state.persons.map((person,i) => <li key={i}>{person.positive}</li>)}
        { this.state.persons.map((person,i) => <li key={i}>{person.totalTestResults}</li>)}
      </ul>
      </div>
    )
  }
}
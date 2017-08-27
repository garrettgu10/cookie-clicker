import React, {Component} from 'react';
import Counter from './Counter.jsx';
import Button from './Button.jsx';
import { Route, BrowserRouter as Router } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div style={{textAlign: 'center'}}>
          <Counter />
          <div style={{height: 50}} />
          <Route exact path="/" component={Button} />
          <Route path="/counter" component={() =>
            (<div>Go to tamscso.ga/clicker to play Cookie Clicker!</div>)
          } />
        </div>
      </Router>
    )
  }
}

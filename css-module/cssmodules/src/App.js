import React from 'react'
import styles from './App.module.css'
import Title from './Title/Title'
import Rocket from './Rocket/Rocket'
import Smoke from './Rocket/Smoke'
import Grid from './Grid/Grid'
import Background from './Background/Background'

import facts from './Data/NASA_facts.json'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      facts,
    }
  }
  render() {
    return (
      <div className={styles.App}>
        <Title/>
        <Rocket/>
        <Smoke/>
        <Grid facts={this.state.facts}/>
        <Background/>
      </div>
    );
  }
}

export default App;

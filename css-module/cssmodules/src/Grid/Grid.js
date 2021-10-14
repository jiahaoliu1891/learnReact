import React  from "react"
import Griditem from './Griditem'
import styles from './Grid.module.css'

export default class App extends React.Component {
    renderFacts() {
        return this.props.facts.map(item => <Griditem key={item.id} fact={item}/> );
    }
    render() {
        return (
            <div>
                <section className={styles.grid}>
                    {this.renderFacts()}
                </section>
            </div>
        )
    }
}   
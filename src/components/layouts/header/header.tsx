import { PureComponent } from "react"
import styles from '../../../../styles/Header.module.css'


export default class Header extends PureComponent {
  render () {
    return (
        <div className={styles.header}>
            <h1>Ordinary Angels</h1>
            <p>simple header</p>
            </div>
    )
  }
}
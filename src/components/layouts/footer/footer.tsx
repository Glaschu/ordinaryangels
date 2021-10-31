import { PureComponent } from "react"
import styles from '../../../../styles/Footer.module.css'


export default class Footer extends PureComponent {
  render () {
    return (
        <div className={styles.footer}>
  <p>© 2021 Ordinaryangels.co.uk</p>
</div>
    )
  }
}
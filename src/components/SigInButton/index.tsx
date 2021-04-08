import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SigInButton() {

  const isUserLoggedIn = false

  return isUserLoggedIn ?
  (
    <button type="button" className={styles.sigInButton}>
      <FaGithub color="#04D361"/>
      Brian Pontes
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  )
    :
  (
    <button type="button" className={styles.sigInButton}>
      <FaGithub color="#EBA417"/>
      Sig in with Github
    </button>
  )
}

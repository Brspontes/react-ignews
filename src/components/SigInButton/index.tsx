import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession } from 'next-auth/client'

export function SigInButton() {

  const [session] = useSession()

  return session ?
  (
    <button type="button" className={styles.sigInButton}>
      <FaGithub color="#04D361"/>
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  )
    :
  (
    <button type="button" className={styles.sigInButton} onClick={() => signIn()}>
      <FaGithub color="#EBA417" />
      Sig in with Github
    </button>
  )
}

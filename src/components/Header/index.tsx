import { SigInButton } from '../SigInButton'
import styles from './styles.module.scss'
import Link from 'next/link'
import { ActiveLink } from '../ActiveLink'
//import { useRouter } from 'next/dist/client/router' - pega o nome da rota asPath

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ignews"/>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/"><a>Home</a></ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch><a>Posts</a></ActiveLink>
        </nav>
        <SigInButton />
      </div>
    </header>
  )
}

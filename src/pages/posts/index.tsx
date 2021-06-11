import Head from 'next/head'
import styles from './posts.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março de 2021</time>
            <strong>Delegates</strong>
            <p>Sendo mais teórico, delegates ou delegados, são ponteiros que apontam para funções, normalmente externas ao método em execução.</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Delegates</strong>
            <p>Sendo mais teórico, delegates ou delegados, são ponteiros que apontam para funções, normalmente externas ao método em execução.</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Delegates</strong>
            <p>Sendo mais teórico, delegates ou delegados, são ponteiros que apontam para funções, normalmente externas ao método em execução.</p>
          </a>
        </div>
      </main>
    </>
  )
}

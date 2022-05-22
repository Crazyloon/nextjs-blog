import utilStyles from '../styles/utils.module.scss';
import styles from '../styles/layout.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const AuthorHeader = ({home, name, avatar, homepage}) => {
  return ( 
    <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src={`/images/${avatar}.jpg`}
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href={homepage}>
                <a>
                  <Image
                    priority
                    src={`/images/${avatar}.jpg`}
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href={homepage}>
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
   );
}
 
export default AuthorHeader;
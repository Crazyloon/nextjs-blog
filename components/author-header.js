import Image from 'next/image';
import Link from 'next/link';

const AuthorHeader = ({home, name, avatar, homepage}) => {
  return ( 
    <header className='flex flex-col align-center'>
          {home ? (
            <>
              <Image
                priority
                src={`/images/${avatar.toLowerCase()}.jpg`}
                className='rounded-full'
                height={144}
                width={144}
                alt={name}
              />
            </>
          ) : (
            <>
              <Link href={homepage}>
                <a>
                  <Image
                    priority
                    src={`/images/${avatar.toLowerCase()}.jpg`}
                    className='rounded-full'
                    height={144}
                    width={144}
                    alt={name}
                  />
                </a>
              </Link>
            </>
          )}
        </header>
   );
}
 
export default AuthorHeader;
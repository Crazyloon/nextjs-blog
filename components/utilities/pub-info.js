import Date from './date';
import Link from 'next/link';

const PubInfo = ({author, date, readTime, homepage}) => {
  return ( 
    <div>
      <address>
        <Link href={homepage}>
          <a rel="author">{author}</a>
        </Link>
      </address>
      <div className='font-thin'>
        <Date dateString={date} /> <span className='mx-1'>·</span> <span>{Math.ceil(readTime * .60)} min read</span>
      </div>
    </div>
   );
}
 
export default PubInfo;
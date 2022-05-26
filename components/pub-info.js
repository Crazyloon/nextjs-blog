import Date from './date';
import Link from 'next/link';

const PubInfo = ({author, date, homepage}) => {
  return ( 
    <div>
      <address>
        <Link href={homepage}>
          <a rel="author">{author}</a>
        </Link>
      </address>
      <Date dateString={date} />
    </div>
   );
}
 
export default PubInfo;
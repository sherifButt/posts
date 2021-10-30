import Meta from '../components/Meta'
import Link from 'next/link';
const about = () => {
   
   return (
      <div>
         <Meta title="About" keywords="aoubt,about us" description ='about us page contains all about the website'/>
         <h1>About us</h1>
         <Link href="/">Back to main page</Link>
      </div>
   );
};

export default about;

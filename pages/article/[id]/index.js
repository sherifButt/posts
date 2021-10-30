import config from '../../../config/config';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const article = ({ article }) => {
   const router = useRouter();
   // const { id } = router.query;

   return (
      <>
         <h1 className="text-uppercase">{article.title}</h1>
         <p className="text-left">{article.body}</p>
         {/* <Link href="/">&larr;Back to List</Link> */}
         <ul className="pagination">
            <li className="page-item">
               <span className="page-link" onClick={() => router.back()}>
                  &larr;Back to List
               </span>
            </li>
         </ul>
      </>
   );
};

export const getStaticProps = async context => {
   const res = await axios.get(`${config.apiPath}/posts/${context.params.id}`);

   return {
      props: {
         article: res.data,
      },
   };
};

export const getStaticPaths = async context => {
   const res = await axios.get(`${config.apiPath}/posts`);

   const paths = res.data.map(post => ({ params: { id: post.id.toString() } }));

   return {
      paths,
      fallback: false,
   };
};

export default article;

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Col, Row } from 'reactstrap';
import ArticleList from '../components/ArticleList';
import PaginationBar from '../components/PaginationBar';
import config from '../config/config';
import { useRef } from 'react';

export default function IndexPage({ articles }) {
   
   // Pagination
   const route = useRouter();
   const totalArticles = articles.length;
   const p = config.postsPerPage;
   const pages = Math.round(totalArticles / p);
   let page = route.query?.page ? route.query?.page : 1;
   if (page > pages) page = pages;
   const start = (page - 1) * p;
   const end = page * p;
   const articlesPagination = articles.slice(start, end);

   return (
      <>
         <Row>
            <Col className="col-sm-12 col-md-6 offset-md-3">
               <h1>Welcome to Next</h1>
               <Link href="/about">about</Link>
            </Col>
         </Row>
         <Row>
            <Col>{/* <DonutCardChart /> */}</Col>
         </Row>
         <Row className="mt-4 mb-4">
            <ArticleList articles={articlesPagination}  />
         </Row>
         <Row>
            <Col>
            <PaginationBar totalArticles={totalArticles} pages={pages} page={page}/>
            </Col>

         </Row>
      </>
   );
}

IndexPage.defaultProps = {
   query: {page:1}
}

// export const getStaticProps = async () => {
//    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//    return {
//       props: {
//          articles: res.data,
//       },
//    };
// };

// export const getStaticProps  = async (context) =>{
//    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

//    return {
//       props: {
//          articles:res.data
//       },
//       revalidate:60
//    }
// }
export const getStaticProps = async context => {
   const res = await axios.get(`${config.apiPath}/posts`);

   return {
      props: {
         articles: res.data,
      },
      revalidate: 60,
   };
};

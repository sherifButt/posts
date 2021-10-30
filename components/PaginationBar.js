import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
const PaginationBar = ({ totalArticles, pages, page }) => {
   // const pagesHtml = for (let i = 0; i < pages; i++){ console.log(i) }
   const pagesArr = [...Array(pages)];
   const router = useRouter();
   const currentPage = router.query?.page;
   return (
      <nav ariaLabel="Page navigation example">
         <ul className="pagination">
            <li className="page-item">
               <Link href={`/?page=${currentPage - 1 < 1 ? '1' : currentPage - 1}`}>
                  <a className="page-link" href="#0">
                     &laquo;Prevous
                  </a>
               </Link>
            </li>
            {pagesArr.map((x, i) => (
               <li className={`page-item ${page == i + 1 ? 'active' : ''}`} key={i}>
                  <Link
                     key={i}
                     href={`/?page=${i + 1}`}
                     // as={`/?page=${i + 1}`}
                     // onClick={e => console.log(e.target.id)}
                  >
                     <a className={`page-link`}> {i + 1}</a>
                  </Link>
               </li>
            ))}
            <li className="page-item">
               <Link
                  href={`/?page=${
                     parseInt(currentPage) + 1 < pages ? parseInt(currentPage) + 1 : pages
                  }`}>
                  <a className="page-link">Next&raquo;</a>
               </Link>
            </li>
         </ul>
         <p>total of {totalArticles} articles </p>
      </nav>
   );
};

PaginationBar.defaultProps = {
   totalArticles: 7,
   pages: 4,
};
export default PaginationBar;

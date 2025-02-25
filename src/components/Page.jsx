import { useEffect } from 'react';
import PageContent from './PageContent.jsx';

import { capitalizeFirstLetter } from '../utils/partners.js';
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  //Remove the leading slash from the currentPage path 
  currentPage = currentPage.substring(1);

  //Update the document title whenever the currentPage changes
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage)}</h2>

      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}
export default Page;

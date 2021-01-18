import React from 'react';
import { Link } from 'react-router-dom';

import './SearchPage.scss';

import { useStateValue } from '../../StateProvider';
import useGoogleSearch from './../../useGoogleSearch';
import Search from '../../components/Search';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.ru/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;

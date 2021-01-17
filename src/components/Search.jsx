import React from 'react';
import { useHistory } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

import './Search.scss';

function Search({ hideButtons = false }) {
  const [input, setInput] = React.useState('');
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log('enter enter');

    history.push('/search');
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          placeholder="ИЛЮХА ХАОСДНО"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">Я ХЗ ЧЕ СЮДА НАПИСАТЬ</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined">
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            Я ХЗ ЧЕ СЮДА НАПИСАТЬ
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;

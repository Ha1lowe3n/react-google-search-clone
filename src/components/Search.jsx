import React from 'react';
import { useHistory } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

import './Search.scss';

const someWord = [
  'Как дела?',
  'Good night',
  'Best React tutorial',
  'Как джуну найти работу',
  'Как защититься от НЛО',
];

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = React.useState('');
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push('/search');
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button onClick={(e) => setInput(e.target.innerText)} variant="outlined">
            {someWord[Math.floor(Math.random() * someWord.length)]}
          </Button>
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
            wtf
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;

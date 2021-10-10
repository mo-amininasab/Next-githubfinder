import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  matchedUsersActionCreators,
  alertActionCreators,
} from '../../store/index';

import Alert from '../layout/alert';

const Search = () => {
  const [term, setTerm] = useState('');

  const { data } = useSelector((state) => state.matchedUsers);
  const { message, type } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const ChangeHandler = (e) => {
    setTerm(e.target.value);
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (term.trim() === '') {
      dispatch(
        alertActionCreators.showAlert('Pleas enter something.', 'WARNING')
      );

      setTimeout(() => {
        dispatch(alertActionCreators.removerAlert());
      }, 5000);
      return;
    }

    dispatch(matchedUsersActionCreators.getMatchedUsers(term));
  };

  const ClearHandler = () => {
    setTerm('');

    dispatch(matchedUsersActionCreators.clearMatchedUsers());
  };

  return (
    <div className="flex flex-col space-y-4">
      {message && <Alert message={message} type={type} />}

      <form onSubmit={SubmitHandler} className="flex flex-col space-y-4">
        <input
          type="text"
          name="userName"
          placeholder="Search Users..."
          className="border border-black py-1 px-2 rounded-sm"
          value={term}
          onChange={ChangeHandler}
          autoFocus
        />
        <button
          type="submit"
          className="bg-dark text-white py-1 px-2 rounded-sm hover:opacity-90"
        >
          Search
        </button>
      </form>
      {data?.total_count > 0 && (
        <button
          onClick={ClearHandler}
          className="bg-light py-1 px-2 rounded-sm"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

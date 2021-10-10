import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { matchedUsersActionCreators } from '../../store/index';

const Search = () => {
  const [term, setTerm] = useState('');

  const { data, loading, error } = useSelector((state) => state.matchedUsers);
  const dispatch = useDispatch();

  const ChangeHandler = (e) => {
    setTerm(e.target.value);
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    dispatch(matchedUsersActionCreators.getMatchedUsers(term));
  };

  const ClearHandler = () => {
    setTerm('');
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* {message.length > 0 && <Alert message="Please enter something." />} */}

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
      {/* {'total_count' in data && data.total_count > 0 && ( */}
      <button onClick={ClearHandler} className="bg-light py-1 px-2 rounded-sm">
        Clear
      </button>
      {/* )} */}
    </div>
  );
};

export default Search;

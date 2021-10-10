import axios from 'axios';
import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  const [matchedUsers, setMatchedUsers] = useState([]);

  const ChangeHandler = (e) => {
    setTerm(e.target.value);
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${term}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setMatchedUsers(data.items)
  };
  console.log(matchedUsers);

  const ClearHandler = () => {
    setTerm('');
    setMatchedUsers([]);
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

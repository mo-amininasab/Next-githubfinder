import React, { useState, useRef, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  const inputRef = useRef();

  const ChangeHandler = (e) => {
    
    
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    
    
  };

  const ClearHandler = () => {
    
    
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
          ref={inputRef}
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

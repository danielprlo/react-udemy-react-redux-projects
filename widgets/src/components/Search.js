import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  //In a real life case, this wont be like this
  //better start state with empty string
  //and add a condition before calling search()
  //checking that term is not empty
  const [term, setTerm] = useState('programming'); 
  const [results, setResults] = useState([]);
  console.log(results);
  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });
      setResults(data.query.search);
    };

    search();
  }, [term])

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="input" 
          />
        </div>
      </div>
    </div>
  )
}

export default Search;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    /*There are three possible ways to make a request to the wikipedia org. 
          that are as follows: */

    /* First Method */
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    // search();

    /* Second Method */
    //   ( async () => {
    //     await axios.get('sdfdfsdf');
    //   })();

    /* Third Method */
    //  axios.get('dsfdfsdfs')
    // .then((response) => {console.log(response.data)})

    /* If we do not want to show initial default value for term */
    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedLists = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="ui field">
          <label style={{ marginTop: "10px" }}>Enter Search term</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedLists}</div>
    </div>
  );
};

export default Search;

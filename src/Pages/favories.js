import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";



const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  
  

  

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <button type="button" class="btn btn-dark col-2">Delete Favorites</button>
      </div>
      <div className="row">
        
        <div className="col-lg-12 col-12">
          <div className="row">
            <Card page="/favories/" results={results} />
          </div>
        </div>
      </div>
      <div className="pagination justify-content-center my-4 gap-4">
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
      </div>
    </div>
  );
};

export default Home;

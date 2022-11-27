import React, { useEffect, useState } from "react";
import axios from "axios";

let App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
     <div>
      {data?
    <div className="container">
      <ul>
        <br></br>

        {data.map((repo) => (
          <div key={repo.id}>
            ●{repo.username}:{repo.name}
          </div>
        ))}
      </ul>
    </div>:<div>Yükleniyor</div> }
  
 </div> ); }

export default App;

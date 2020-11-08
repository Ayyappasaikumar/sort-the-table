  
import React,{useState,useEffect} from 'react'
import db from "./db.json"
import schema from './schema';
import Table from "./Table"
function App() {
  const bands=db;
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState(db);

  useEffect(() => {
    
     
      const sorted = [...bands].sort((a, b) => a.id-b.id);
      setData(sorted);
    

    
  }, [bands]);
console.log(bands)
  return (
    <div className="container p-2">
      <div className="row">
        <div className="col">
        
          <Table headers={Object.keys(schema)} rows={data} />
          <button onChange={(e) => setData(e.target.value)}>sort</button>
        </div>
      </div>
    </div>
  );
   
  
}

export default App;





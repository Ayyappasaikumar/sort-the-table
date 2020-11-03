  
import React from 'react'
import db from "./db.json"
import schema from './schema';
import Table from "./Table"
function App() {
function sortasc(){
  db.sort(function(a, b){
    return a.id - b.id;
   
});
console.log(db);
  }
  return (
    <div className="container p-2">
      <div className="row">
        <div className="col">
        
          <Table headers={Object.keys(schema)} rows={db} />
          <button  onClick={sortasc}>sort asc</button>
        </div>
      </div>
    </div>
  );
   
  
}

export default App;





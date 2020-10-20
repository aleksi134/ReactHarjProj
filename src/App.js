import React, { useState } from 'react';


function App() {

  let taskit = ["jutska 1", "jutska 2", "jutska 3"]
  
  const [uusiTaski, paivitaUusiTaski] = useState("jtn")
  
  function lisaaTaski() {
    //tee jtn
  }

  return (
    <div className="App">
      <p>varmistusheippa</p>
      <input type="text" value={uusiTaski} />
      <input type="button" value="Lisää taski" onClick={() => lisaaTaski() } />
      <ul>
        { taskit.map(yksittainenTaski => <li>{yksittainenTaski}</li> )}
      </ul>
     
    </div>
  );
}

export default App;

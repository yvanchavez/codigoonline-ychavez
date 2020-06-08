import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import TablaPokemones from './components/TablaPokemones';
function App() {

  const [pokemones,setPokemones] = useState([]);

  const traerPokemones = () => {
    let endpoint = "https://pokeapi.co/api/v2/pokemon/";

    fetch(endpoint).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setPokemones(data.results);
      });
    });
  };
  useEffect(() => {
    console.log("Ejecutando UseEffect");
    traerPokemones();
  }, [])

  return (
    <Fragment>
      <Header />
      <main className="container-fluid">
        <div className="row">
          <TablaPokemones pokemones={pokemones}/>
        </div>
      </main>
    </Fragment>
  );
}

export default App;

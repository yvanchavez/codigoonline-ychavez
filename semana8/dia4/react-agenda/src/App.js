import React, { Fragment }  from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <Header/>
      <main className="container-fluid">
        <h1 className="display-3 text-center">Agenda <span className="text-danger">App</span></h1>
        <div className="row">
          <div className="col">
          <Formulario/>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;

import React from 'react';
import Board from './components/Board.jsx';

const App = () => {
  return (
    
    /*------------------------------

    A component must always return a single element so we need to wrap it into : <></>

    ------------------------------*/

    <>
     <h1>TIC TAC TOE</h1>
     <Board />
    </>
  );
};

export default App;

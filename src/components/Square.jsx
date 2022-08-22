import React from 'react'


const Square = ({value,onClick}) => {
    // basically are props is objecct and the value which we will pass in tag in board.jsx will become keys

  return (
    <button type="button" className="square" onClick={onClick}>{value}</button>
  )
}




// by directly using array destructering

// const Square = ({value}) => {
//     // basically are props is objecct and the value which we will pass in tag in board.jsx will become keys

//     // console.log(props);
//   return (
//     <button type="button">{value}</button>
//   )
// }



export default Square;
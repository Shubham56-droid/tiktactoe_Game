import React from 'react';

// const Square = (props) => {
//     // console.log(props);
//   return (<button type="button">{props.value}</button>)
// }

// or
// we can do destructing 
const Square = ({value}) => {

    // console.log(props);

  return (<button type="button">{value}</button>);

}

export default Square;
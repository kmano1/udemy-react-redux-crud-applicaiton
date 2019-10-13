import React from 'react';

// class App extends Component{
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input id="bar" type="text" onClick={()=>{console.log("aaa")}} />
//       </React.Fragment>
//     )
//   }
// }

const App=()=>{
  return (
  <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
  )
}
const Cat=()=>{
  return <div>Meow!</div>
}

export default App;

import React,{ Component } from 'react';

class App extends Component{
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input id="bar" type="text" onClick={()=>{console.log("aaa")}} />
      </React.Fragment>
    )
  }
}


export default App;


import React from 'react'
import "./App.css"
import Hocnent from './HighOrder' 
import ParentComp from './components/ParentComp';
import { PureComp } from './components/PureComp';
  
class App extends React.Component {
  render() {
  
    const { show, handleclick } = this.props
  

    return (
    <div>
      <ParentComp ></ParentComp>
      <h1>This is the example of HOC</h1>
      {/* <PureComp></PureComp> */}
      <h2 id='count'>{show}</h2>
    <button id='button1' onClick={handleclick}>counter {show} 
    </button> 
    <button id='button2' onClick={handleclick}>counter {show} 
    </button> 
    </div>
    ) 
  }
}
  
  
export default Hocnent(App);
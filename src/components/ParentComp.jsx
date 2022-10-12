import React, { Component } from 'react'
import PureComp from './PureComp'

export class ParentComp extends Component { 
  constructor(props) {
  super(props)

  this.state = {
     Name:'Pooja',
    //  id:'1',
    //  Lname:'thorat',
    //  designation:'H.R',
    //  PassoutYear:2020
    
  }
}
   changeState=()=>{
   this.setState({
     Name:"pooja"

 })
}



  render() {
    console.log("This is parent comp");
  
    return (
      <div>
        <>
       <h1> This is done using pure components </h1><hr />
        
        <PureComp Name={this.changeState}></PureComp>
        </>
      </div>
  
    )
  }
  
  

    }


export default ParentComp;

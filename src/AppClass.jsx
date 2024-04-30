import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    const get_imge = this.imageData();
    return(
      <>
      <h1>KALVIUM GALLERY</h1>
      <div className="app">
        {get_imge.map((elephnt)=>{
          return <img key={elephnt.id} src={elephnt.img}  alt={elephnt.id} />
        })}
      </div>
      </>
    )
  }
}

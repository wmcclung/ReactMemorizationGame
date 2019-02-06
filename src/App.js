import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"

import mk1 from "./images/mk1.jpg"
import mk2 from "./images/mk2.jpg"
import mk3 from "./images/mk3.jpg"
import mk4 from "./images/mk4.jpg"
import mk5 from "./images/mk5.jpg"
import mk6 from "./images/mk6.jpg"
import mk7 from "./images/mk7.jpg"
import mk8 from "./images/mk8.jpg"
import mk9 from "./images/mk9.jpg"
import mk10 from "./images/mk10.jpg"
import mk11 from "./images/mk11.jpg"
import mk12 from "./images/mk12.jpg"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "KO" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Fatality: You Lose",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "mk1":
        return `${mk1}`
      case "mk2":
        return `${mk2}`
      case "mk3":
        return `${mk3}`
      case "mk4":
        return `${mk4}`
      case "mk5":
        return `${mk5}`
      case "mk6":
        return `${mk6}`
      case "mk7":
        return `${mk7}`
      case "mk8":
        return `${mk8}`
      case "mk9":
        return `${mk9}`
      case "mk10":
        return `${mk10}`
      case "mk11":
        return `${mk11}`
      case "mk12":
        return `${mk12}`
      default:
        return `${mk7}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
































// import React, { Component } from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Board from "./components/Board"
// import images from './image'

// class App extends Component {
//   state = {
//     "message": "Click an image to start",
//     "score": 0,
//     "images": images,
//     "clicked": []
//   };

//   handleImageClickById = (imageId) => {
//     let clicked = this.state.clicked.slice(0);
//     console.log("Checking", clicked, imageId);
//     // is this imageId in clicked
//     if (clicked.findIndex(item => imageId === item) === -1){
//       clicked.push(imageId);
//       this.setState({
//         "clicked": clicked,
//         "score": this.state.score + 1,
//         "message": "Good guess, keep going"
//       })
//     } else {
//       // you lose, start over
//       this.setState({
//         "message": "You Lose, start over",
//         "score": 0,
//         "clicked": []
//       })
//     }
//     // rearrange images
//     let images = this.state.images.slice(0);
//     images.sort(() => Math.random() - 0.5);
//     this.setState({images});
//     console.log("handling click for ",imageId);
    
//   } 

//   render() {
//     return (
//       <div className="App">
//         <Header 
//         message={this.state.message}
//         score={this.state.score}
//         total={this.state.images.length} />
//         <Board 
//           images={this.state.images}
//           clickHandler={this.handleImageClickById}
//         />
//       </div>
//     );
//   }
// }

// export default App;

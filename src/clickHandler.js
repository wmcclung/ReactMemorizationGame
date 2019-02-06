const clickHandler = (imageId) => {
    let clicked = this.state.clicked.slice(0);
    console.log("Checking", clicked, imageId);
    // is this imageId in clicked
    if (clicked.findIndex(item => imageId === item) === -1){
      clicked.push(imageId);
      this.setState({
        "clicked": clicked,
        "score": this.state.score + 1,
        "message": "Good guess, keep going"
      })
    } else {
      // you lose, start over
      this.setState({
        "message": "You Lose, start over",
        "score": 0,
        "clicked": []
      })
    }
    // rearrange images
    let images = this.state.images.slice(0);
    images.sort(() => Math.random() - 0.5);
    this.setState({images});
    console.log("handling click for ",imageId);
    
  } 

  export default clickHandler;
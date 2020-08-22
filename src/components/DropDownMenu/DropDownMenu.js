import React    from "react";
import template from "./DropDownMenu.jsx";


class DropDownMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      colors: []
    };
  }

  componentDidMount() {
    // Bubble Phase on document event listener, 
    // document is the root element, 
    // therefor bubble phase does not affect only document
    document.addEventListener('click', event => {
      if(event.target.className!=="search"){
        this.setState({
          colors: []
        });
      }
    });

    document.addEventListener('keyup', event => {   
      // Enter Key
      if (event.keyCode === 13) {
        console.log(document.activeElement)
        if(document.activeElement.tagName==="SPAN") {
          let input = document.getElementsByTagName("input")[0];
          input.value = document.activeElement.textContent;
          this.setState({
            colors: []
          });
          console.log("Entered pressed")
          input.focus();
        }
      }
      //     // Tab key
      // if (event.keyCode === 9) {
      //   console.log(document.activeElement)
      //   if(document.activeElement.tagName==="SPAN") {
      //     let preveles = document.getElementsByClassName("color-focus")
      //     if(preveles.length > 0){
      //       preveles[0].classList.remove("color-focus");
      //     }
      //     let span = document.activeElement;
      //     span.classList.add("color-focus");
      //     console.log("Tab pressed")
      //     // console.log(document)
      //     console.log(document.activeElement)
      //   }
      // }
      

      // Esc Key
      if(event.keyCode === 27) {
        this.setState({
          colors: []
        });
      }
    });
  }

  // Bubble Phase listener for selecting a color,
  // upon selecting a color we have to set state to colors: [],
  // in order to remove the drop down menu, similar to when we click anywhere on the document
  //  therefor 2nd part of action similar to componentDidMount() action, we make use of bubbling
  handleSelect = (event, index) => {
    let input = document.getElementsByTagName("input")[0];
    let color = this.state.colors[index];
    input.value = color[0]+color[1];
  }

  handleQuery = (query) => {
    if(!query || query.match(/\s/g)) {
      this.setState({
        colors: []
      })
      return;
    };

    // filter prop based on search query on a different thread
    let promise = new Promise((resolve, reject) => {
      try {
        const regex = new RegExp("^("+query+")","gi");
        console.log(regex);
        let colors = this.props.colorsList
        .filter(color => color.match(regex))
        .map(color => [color.substring(0, query.length), color.substring(query.length)]);
        resolve(colors);
      }catch(err) {
        reject(err);
      }
    });

    promise.then(colors => {
      this.setState({
        colors: [...colors]
      });
    }, err => console.log(err));    
  }

  handleSearch = (event) => {
    this.handleQuery(event.currentTarget.value);
  }

  handleMouseEnter = (event) => {
    let span = event.currentTarget;
    span.classList.add("color-focus");
  }

  handleMouseLeave = (event) => {
    let span = event.currentTarget;
    span.classList.remove("color-focus");
  }

  render() {
    return template.call(this);
  }
}

export default DropDownMenu;

import React from "react";
import {
  Title,
  HighlightedWord
} from "./ChangingTextBox.styles";
import icon from "../../assets/icon.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../NavBar/NavBar.component";

class ChangingTextBox extends React.Component{
  constructor(){
    super()
    this.state= {
      words: ["word1", 'word2', 'wordthree'],
      index: 0
    }

    

  }

  componentDidMount(){

    
    setInterval(() => {
      let temp = this.state.index;
      if(temp===this.state.words.length-1){
        temp=0
      }
      else{
        temp+=1
      }
      this.setState({index:temp})
  }, 5000)
  }
   
  

  render(){
    let {index, words} = this.state;
    return(
      <Container fluid className="d-flex justify-content-center" style={{ backgroundColor: "rgba(154,211,255,0.3)", height:"30vh" }}>
      <Row style={{ padding: "2em" }}>
          <Title>
            We are <HighlightedWord>{words[index]}</HighlightedWord>
          </Title>
          
      </Row>
    </Container>
    );
  }
};

export default ChangingTextBox;

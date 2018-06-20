import React from "react";
// ---
import Container from "./../Container";
//--
import Row from "./../Row";
//--
import Col from "./../Col";

import "./Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Header = props => (

  <header className="header">
    <Container>
      <Row>
        <Col size="md-3">
          <span><a className="link" href="/">Clicky Game</a></span>
        </Col>

        <Col size="md-1">
        </Col>



        <Col size="md-4">
        {/* { props.message === "You guessed correctly!" ? className="success" : className="fail"} */}
          <span className={`${props.message === "You guessed correctly!" ? "success" : "fail"}`}>{props.message}</span>

        </Col>



        <Col size="md-4">
          <span>
            Your Score: {props.score} | Top Score: {props.topScore}
          </span>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
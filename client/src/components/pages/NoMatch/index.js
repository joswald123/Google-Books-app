import React from "react";
import { Col, Row, Container } from "../../Global/Grid";
import Jumbotron from "../../Global/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404</h1>
            <h2 className="text-white"> SORRY, THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.</h2>
            <h1>
              <span role="img" aria-label="Pensive Face">
              😔
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
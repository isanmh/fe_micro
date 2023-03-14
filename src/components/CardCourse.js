import React, { Component } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import Images from "../config/data";

export default class CardCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Images,
    };
  }
  render() {
    return (
      <Container className="mt-5 mb-5">
        <h1 className="text-center mb-4">Our Courses</h1>
        <Row>
          {this.state.data.map((item, index) => {
            return (
              <Fade key={index} delay={item.dd} bottom>
                <div className="col-md-4 mb-3">
                  <Card>
                    <Card.Img variant="top" src={item.url} />
                    <Card.Body>
                      <Card.Title>{item.courseName}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Fade>
            );
          })}
        </Row>
      </Container>
    );
  }
}

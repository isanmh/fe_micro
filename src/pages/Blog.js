import React, { Component } from "react";
import { Container, Card, Row } from "react-bootstrap";
import axios from "axios";
import { Zoom } from "react-reveal";

export default class Blog extends Component {
  // membuat data state kosong untuk menampung data API
  // state = {
  //   post: [],
  // };

  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }

  // ketika komponen telah di-mount-ing, maka panggil API
  componentDidMount() {
    // vanila js untuk fetch api
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ post: data }));

    // axios untuk fetch api
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      this.setState({ post: res.data });
    });
  }

  render() {
    console.log(this.state.post);
    return (
      <section>
        <Container>
          <h1 className="text-center mt-4">Our Blog</h1>
          <hr></hr>
          <Row>
            {this.state.post.map((post) => {
              return (
                <Zoom key={post.id} right>
                  <div className="col-md-4 mb-4 text-center">
                    <Card className="mb-5">
                      <Card.Body>
                        <Card.Img src="https://placeimg.com/640/480/tech"></Card.Img>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Zoom>
              );
            })}
          </Row>
        </Container>
      </section>
    );
  }
}

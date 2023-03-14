import React, { useEffect, useState } from "react";
import axios from "axios";
import { Zoom } from "react-reveal";
import { Row, Container, Card } from "react-bootstrap";

const About = () => {
  // buat data tampung
  const [data, setData] = useState([]);
  // pamanggil data mengunakan axios & useEffect
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);

  return (
    <section>
      <Container>
        <h1 className="text-center mt-4">Our Team</h1>
        <hr></hr>
        <Row>
          {data.map((item) => {
            return (
              <Zoom key={item.id} right delay={(item.id + 2) * 100}>
                <div className="col-md-4 mb-4 text-center">
                  <Card className="mb-5">
                    <Card.Body>
                      <Card.Img src={item.avatar}></Card.Img>
                      <Card.Title>{item.first_name}</Card.Title>
                      <Card.Text>{item.email}</Card.Text>
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
};

export default About;

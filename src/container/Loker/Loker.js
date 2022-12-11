import React, { useEffect, useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import axios from "axios";

// import { Button,Card,Container } from "react-bootstrap";
import SubmitLoker from "../../component/SubmitLoker";
import JumboComp from "../../component/JumboComp";
// import './Loker.css'

const Loker = () => {
  const [loker, setLoker] = useState([]);
  const [lokerDef, setLokerDef] = useState([]);
  useEffect(() => {
    const getPostAPI = () => {
      axios.get("http://localhost:3000/products/").then((result) => {
        setLoker(result.data);
        setLokerDef(result.data);
        console.log(result);
      });
    };
    getPostAPI();
  }, []);

  const handleSearch = (text) => {
    if (!text && lokerDef) {
      setLoker(lokerDef);
      return;
    } else {
      const search = loker.filter((el) => {
        return (
          el.posisi.toLowerCase().includes(text.toLowerCase()) ||
          el.lokasi.toLowerCase().includes(text.toLowerCase())
        );
      });
      setLoker(search);
    }
  };
  return (
    <>
      <JumboComp search={handleSearch} />
      <Container>
        <h2>Rekomendasi Lowongan</h2>
        <p>Temukan pekerjaan Impianmu</p>
        <Card>
          <Row>
            {loker &&
              loker.map((Post) => {
                return (
                  <Col sm="3">
                    <SubmitLoker key={Post.id} data={Post} />
                  </Col>
                );
              })}
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default Loker;

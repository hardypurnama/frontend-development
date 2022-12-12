import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SubmitLoker.css";

const SubmitLoker = (props) => {
  return (
    //     <div className='post'>
    //     <div className='img-thumb'>
    //         <img src="https://placeimg.com/200/150/tech" alt="dummy" />
    //     </div>
    //     <div className='content'>
    //         <p className='title'>{props.title}</p>
    //         <p className=''>{props.desc}</p>

    //     </div>

    // </div>
    <Container>
      <div className="dftLowongan">
        <Card sx={{ maxWidth: 300 }}>
          <Card.Img variant="top" src={props.data.poster} />
          <Card.Body className="bodyLow">
            <Card.Title className="title">{props.data.posisi}</Card.Title>
            <Card.Text className="desc">{props.data.lokasi}</Card.Text>
            <Button variant="dark">
            <Link className="min" to={"/DetailLoker/" + props.data.id}>Lihat Detail Lowongan</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default SubmitLoker;

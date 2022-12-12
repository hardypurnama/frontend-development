import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import axios from "axios";
import "./DetailLoker.css";
import NavbarComp from "../../component/NavbarComp";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUser, authHeader } from "../../Utils/Authentication";

function DetailLoker() {
  const Navigate = useNavigate();
  const [Detail, setDetail] = useState(null);
  const [DetailKan, setKandidat] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getPostAPI = () => {
      axios
        .get("https://backend-recruitment-production.up.railway.app/products/" + id)

        .then((result) => {
          setDetail(result.data);
        });
    };
    getPostAPI();
  }, []);

  const postDataToAPI = () => {
    const curUser = getUser();
    if (!curUser) {
      Navigate("/");
    } else {
      const loker = {
        id_lowongan: Detail.id,
        id_user: curUser.id,
        id_hr: 0,
        status: "APPLY",
      };

      axios
        .post("https://backend-recruitment-production.up.railway.app/kandidats", loker, {
          headers: authHeader(),
        })
        .then(
          (res) => {
            Navigate("/Users/UserApply");
          },
          (err) => {
            console.log("error: ".err);
          }
        );
    }
  };
  const handleApply = () => {
    postDataToAPI();
  };

  return (
    <Container-fluid>
      <div>
        <NavbarComp />
      </div>
      <div>
        <Container>
          {Detail && (
            <Card className="detailLok">
              <Card.Header as="h5">Perusahaan : {Detail.nama_perusahaan}</Card.Header>
              <Card.Body>
                {/* <Card.Img variant="top" src={props.data.poster} /> */}
                <Card.Title>Posisi : {Detail.posisi}</Card.Title>
                <Card.Title as="h6">Deskripsi Pekerjaan : </Card.Title>
                <Card.Text>{Detail.description}</Card.Text>
                <Button variant="primary" onClick={handleApply}>
                  Apply
                </Button>
              </Card.Body>
            </Card>
          )}
        </Container>
      </div>
    </Container-fluid>
  );
}

export default DetailLoker;

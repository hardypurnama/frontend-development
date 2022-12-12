import React, { useState, useEffect } from "react";
import { Container, Table, Row, Col, Nav, Card } from "react-bootstrap";
import axios from "axios";
import Footer from "../../component/Footer";
import { getUser, authHeader } from "../../Utils/Authentication";

const UserApply = (props) => {
  const [kandidat, setKandidat] = useState([]);

  useEffect(() => {
    const getPostAPI = () => {
      const curUser = getUser();
      axios
        .get("https://backend-recruitment-production.up.railway.app/kandidats/byuser/" + curUser.id, {
          headers: authHeader(),
        })
        .then((result) => {
          setKandidat(result.data);
          console.log(kandidat);
        });
    };
    getPostAPI();
  }, []);

  return (
    <Container>
      <div className="form-main">
        <div className="form-second">
          <div className="content">
            <h2
              className="section-title"
              style={{ color: "Green", backgroundColor: "" }}
            >
              User Apply
            </h2>
            <hr></hr>
            <Row>
              <Col className="col-md-10">
                <Table striped bordered hover>
                  <thead className="tabelComp">
                    <tr>
                      <th>No</th>
                      <th>Nama Perusahaan</th>
                      <th>Posisi</th>
                      <th>Penempatan</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kandidat.length > 0 &&
                      kandidat.map((Post, i) => {
                        return (
                          <tr>
                            <td>{i + 1}</td>
                            <td>
                              {Post.Product
                                ? Post.Product.nama_perusahaan
                                : "-"}
                            </td>
                            <td>{Post.Product ? Post.Product.posisi : "-"}</td>
                            <td>{Post.Product ? Post.Product.lokasi : "-"}</td>
                            <td>{Post.status}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserApply;

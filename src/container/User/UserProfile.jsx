import React, { useState, useEffect } from "react";
import { Form, Container, Button, Row, Col, Nav, Card } from "react-bootstrap";

import { getUser, authHeader } from "../../Utils/Authentication";
import axios from "axios";

const UserProfile = (props) => {
  const [user, setUser] = useState([]);

  const getPostAPIUser = () => {
    const curUser = getUser();
    console.log(curUser);
    axios
      .get("http://localhost:3000/users/" + curUser.id, {
        headers: authHeader(),
      })

      .then((result) => {
        result.data.tgl_lahir = result.data.tgl_lahir
          ? result.data.tgl_lahir.slice(0, 10)
          : null;
        setUser(result.data);
      });
  };
  useEffect(() => {
    getPostAPIUser();
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
              Profil
            </h2>
            <hr></hr>
            <Row>
              <Col className="col-md-10">
                <Form>
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicNama">
                      <Form.Label>Nama</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nama Lengkap"
                        name="nama"
                        value={user.nama}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicemail">
                      <Form.Label>email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={user.email}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicnhp">
                      <Form.Label>no hp</Form.Label>
                      <Form.Control
                        type="nhp"
                        placeholder="no hp"
                        name="nohp"
                        value={user.nohp}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasictglLahir">
                      <Form.Label>tgl_lahir</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="tanggal lahir"
                        name="tgl_lahir"
                        value={user.tgl_lahir}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicdomisili">
                      <Form.Label>domisili</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="domisili"
                        name="domisili"
                        value={user.domisili}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDokumen">
                      <Form.Label>Dokumen</Form.Label>
                      <Form.Control
                        type="gd"
                        placeholder="dokumen"
                        name="document"
                        value={user.document}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDokumen">
                      <Form.Label>Email Verifikasi</Form.Label>
                      <Form.Control
                        type="gd"
                        placeholder="dokumen"
                        name="document"
                        value={
                          user.verified
                            ? "Terverifikasi"
                            : "Belum Terverifikasi"
                        }
                      />
                    </Form.Group>
                  </div>
                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                  <Button variant="primary" type="submit">
                    Update
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;

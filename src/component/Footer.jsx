import React from "react";
import "./JumboComp.css";
import logo from "../img/logo.svg";
import { Container, Card, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container-fluid>
      <Card>
        <div class="footer bg-dark text-white">
          <Container>
            <div className="row1">
              <Row >
                <Col className="kol1">
                <h5>Tentang Ini Loker</h5>
                <p>Ini Loker adalah Situs lowongan kerja layanan berbasis software (Software as a service) hadir sejak 2022 fokus dibidang rekrutmen untuk mempermudah cari pekerjaan dan perekrutan karyawan dimana calon karyawan dapat melihat progres Lamarannya.</p>
                </Col>
                <Col className="kol2">
                  <div className="col col-12">
                    <ul class="list-unstyled mb-0">
                        <h5>Profil Ini Loker</h5>
                      <li>
                        <p>Jalan Semangat No. 1 Pantang Mundur Kota Bandung</p>
                      </li>
                      <li>
                        <p>inilahloker@gmail.com</p>
                      </li>
                      <li>
                        <p>081-222-222-222</p>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <img src={logo} width="300" height="85" />
                </Col>
              </Row>
            </div>
            <div className="row2">
              <Row>
                <Col>
                  <div>
                    <h5 className="mb-1">Copyright 2022 <img src={logo} width="80" height="85" /></h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </Card>
    </Container-fluid>
  );
};

export default Footer;

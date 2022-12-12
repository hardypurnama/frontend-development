import React, { useState, useEffect } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import "./Admin.css";
import axios from "axios";
import { authHeader } from "../../Utils/Authentication";

const MonitoringLoker = (props) => {
  const [loker, setLoker] = useState([]);

  const handleRemove = async (data) => {
    await axios
      .delete(`https://backend-recruitment-production.up.railway.app/products/${data}`, {
        headers: authHeader(),
      })
      .then((res) => {
        getPostAPI();
      });
  };

  const getPostAPI = () => {
    axios
      .get("https://backend-recruitment-production.up.railway.app/products/")

      .then((result) => {
        setLoker(result.data);
      });
  };
  useEffect(() => {
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
              Daftar Loker
            </h2>
            <hr></hr>
            <Table striped bordered hover>
              <thead className="tabelComp">
                <tr>
                  <th>No</th>
                  <th>Nama Perusahaan</th>
                  <th>Posisi</th>
                  <th>Penempatan</th>
                </tr>
              </thead>
              <tbody>
                {loker &&
                  loker.map((Post, i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{Post.nama_perusahaan}</td>
                        <td>{Post.posisi}</td>
                        <td>{Post.lokasi}</td>

                        <td colSpan={2}>
                          <div className="tombol">
                            <Button
                              variant="danger"
                              className="remove"
                              onClick={() => handleRemove(Post.id)}
                            >
                              Delete
                            </Button>
                            <Button
                              variant="success"
                              className="update"
                              onClick={() => props.handleUpdateLoker(Post)}
                            >
                              Update
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MonitoringLoker;

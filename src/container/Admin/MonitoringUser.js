import React, { useState, useEffect } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import axios from "axios";
import { getUser, authHeader } from "../../Utils/Authentication";
import { Link } from "react-router-dom";

const MonitoringUser = (props) => {
  const [kandidat, setKandidat] = useState({
    id_lowongan: " ",
    id_user: " ",
    id_hr: " ",
    status: " ",
  });

  useEffect(() => {
    const getPostAPI = () => {
      const curUser = getUser();
      axios
        .get("http://localhost:3000/kandidats", { headers: authHeader() })
        .then((result) => {
          setKandidat(result.data);
          console.log(kandidat);
        });
    };
    getPostAPI();
  }, []);

  const changeStatus = (e) => {
    console.log(e);
  };
  // const handleChangeStatus{

  // }
  const putDataToAPI = () => {
    axios
      .put(`http://localhost:3000/kandidat/`, { headers: authHeader() })
      .then((res) => {});
  };

  const handleChange = (event) => {
    let Kandidatnew = { ...kandidat };

    Kandidatnew[event.target.name] = event.target.value;
    setKandidat(Kandidatnew);
  };

  return (
    <Container>
      <div className="form-main">
        <div className="form-second">
          <div className="content">
            <h2
              className="section-title"
              style={{ color: "Green", backgroundColor: "" }}
            >
              Daftar Pelamar
            </h2>
            <hr></hr>
            <Table striped bordered hover>
              <thead className="tabelComp">
                <tr>
                  <th>No</th>
                  <th>Nama Kandidat</th>
                  <th>Nama Perusahaan</th>
                  <th>Posisi</th>
                  <th>Penempatan</th>
                  <th>Status</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {kandidat.length > 0 &&
                  kandidat.map((Post, i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{Post.User ? Post.User.nama : "-"}</td>
                        <td>
                          {Post.Product ? Post.Product.nama_perusahaan : "-"}
                        </td>
                        <td>{Post.Product ? Post.Product.posisi : "-"}</td>
                        <td>{Post.Product ? Post.Product.lokasi : "-"}</td>
                        <td>{Post.status}</td>
                        <td>
                          <div className="tombol">
                            <Button
                              variant="success"
                              className="update"
                              onClick={() => props.handleUpdateUser(Post)}
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

export default MonitoringUser;

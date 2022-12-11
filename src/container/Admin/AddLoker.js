import React, { useState, useEffect, Fragment } from "react";
import { Card, Form, Button, FormControl } from "react-bootstrap";
import axios from "axios";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

import { authHeader } from "../../Utils/Authentication";

const AddLoker = (props) => {
  const Navigate = useNavigate();
  const [loker, setLoker] = useState({
    poster: "",
    nama_perusahaan: "",
    posisi: "",
    lokasi: "",
    description: "",
  });

  const handleReset = () => {
    setLoker({
      poster: "",
      nama_perusahaan: "",
      posisi: "",
      lokasi: "",
      description: "",
    });
  };

  useEffect(() => {
    const getPostAPI = () => {
      axios
        .get("http://localhost:3000/products/" + props.idLoker)

        .then((result) => {
          setLoker(result.data);
          // console.log(result);
        });
    };
    if (props.isUpdate) {
      getPostAPI();
    }
  }, []);

  const postDataToAPI = () => {
    axios
      .post("http://localhost:3000/products", loker, { headers: authHeader() })
      .then(
        (res) => {
          handleReset();
          Navigate("/Monitoring/MonitoringLoker");
        },
        (err) => {
          console.log("error: ".err);
        }
      );
  };

  const putDataToAPI = () => {
    axios
      .put(`http://localhost:3000/products/${loker.id}`, loker, {
        headers: authHeader(),
      })
      .then((res) => {
        handleReset();
        Navigate("/Monitoring/MonitoringLoker");
      });
  };

  const handleSubmit = () => {
    if (props.isUpdate) {
      putDataToAPI();
    } else {
      postDataToAPI();
    }
  };

  const handleFormChange = (event) => {
    let Lokernew = { ...loker };

    Lokernew[event.target.name] = event.target.value;
    setLoker(Lokernew);
  };

  const handleUpload = (e) => {
    const formData = new FormData();
    const image = e.target.files[0];
    formData.append("image", image);
    axios
      .post("http://localhost:3000/products/uploads", formData, {
        headers: { ...authHeader(), "Content-Type": "multipart/form-data" },
      })
      .then(
        (res) => {
          let Lokernew = { ...loker, poster: res.data.data };
          setLoker(Lokernew);
        },
        (err) => {
          console.log("error: ".err);
        }
      );
  };

  return (
    <>
      <div className="form-main">
        <div className="form-second">
          <div className="content">
            <div className="form-add-post">
              <h2
                className="section-title"
                style={{ color: "Green", backgroundColor: "" }}
              >
                INPUT LOKER
              </h2>
              <hr></hr>
              <label htmlFor="title">Logo Perusahaan</label>
              {loker.poster && (
                <Card>
                  <Card.Img variant="top" src={loker.poster} />
                </Card>
              )}
              <Form>
                <Fragment>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="title">Poster</Form.Label>
                    <FormControl
                      type="file"
                      placeholder="add title"
                      onChange={handleUpload}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="title">Nama Perusahaan</Form.Label>
                    <FormControl
                      type="text"
                      value={loker.nama_perusahaan}
                      name="nama_perusahaan"
                      placeholder="add title"
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="body">Posisi</Form.Label>
                    <FormControl
                      type="body"
                      value={loker.posisi}
                      name="posisi"
                      placeholder="add body"
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="title">Penempatan</Form.Label>
                    <FormControl
                      type="body"
                      value={loker.lokasi}
                      name="lokasi"
                      placeholder="add body"
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="title">Deskripsi</Form.Label>
                    <FormControl
                      type="body"
                      value={loker.description}
                      name="description"
                      placeholder="add body"
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                </Fragment>
                <div className="simpan d-grid">
                  <Button className="btn-success" onClick={handleSubmit}>
                    simpan
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLoker;

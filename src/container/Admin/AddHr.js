import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import authHeader from "../../Utils/Authentication";

const AddUser = (props) => {
  const [user, setUser] = useState({
    nama: "",
    foto: "",
    username: "",
    password: "",
    email: "",
    nohp: "",
    tgllahir: "",
    domisili: "",
    dokumen: "",
  });

  const handleReset = () => {
    setUser({
      nama: "",
      foto: "",
      username: "",
      password: "",
      email: "",
      nohp: "",
      tgllahir: "",
      domisili: "",
      dokumen: "",
    });
  };

  useEffect(() => {
    const getPostAPI = () => {
      axios
        .get("http://localhost:3000/users/register" + props.idLoker)

        .then((result) => {
          setUser(result.data);
          console.log(result);
        });
    };
    if (props.isUpdate) {
      getPostAPI();
    }
  }, []);

  const postDataToAPI = () => {
    axios
      .post("http://localhost:3000/users/register", user, {
        headers: authHeader(),
      })
      .then(
        (res) => {
          handleReset();
        },
        (err) => {
          console.log("error: ".err);
        }
      );
  };

  const putDataToAPI = () => {
    axios
      .put(`http://localhost:3000/users/register/${user.id}`, user, {
        headers: authHeader(),
      })
      .then((res) => {
        handleReset();
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
    let Usernew = { ...user };

    Usernew[event.target.name] = event.target.value;
    setUser(Usernew);
  };

  return (
    <>
      <p className="section-title"> --INPUT LOKER--</p>
      <hr></hr>
      <hr></hr>
      <div className="form-add-post">
        <label htmlFor="title">Logo Perusahaan</label>
        <Card>
          <Card.Img variant="top" src=" + " /> +
        </Card>
        <label htmlFor="title">Nama Perusahaan</label>
        <input
          type="text"
          value={user.nama_perusahaan}
          name="nama_perusahaan"
          placeholder="add title"
          onChange={handleFormChange}
        />
        <label htmlFor="body">Posisi</label>
        <input
          type="body"
          value={user.posisi}
          name="posisi"
          placeholder="add body"
          onChange={handleFormChange}
        ></input>
        <label htmlFor="title">Penempatan</label>
        <input
          type="body"
          value={user.lokasi}
          name="lokasi"
          placeholder="add body"
          onChange={handleFormChange}
        ></input>
        <label htmlFor="title">Deskripsi</label>
        <input
          type="body"
          value={user.description}
          name="description"
          placeholder="add body"
          onChange={handleFormChange}
        ></input>
        <button className="btn-submit" onClick={handleSubmit}>
          simpan
        </button>
      </div>
    </>
  );
};

export default AddUser;

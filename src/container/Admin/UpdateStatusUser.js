import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { getUser, authHeader } from "../../Utils/Authentication";

const UpdateStatusUser = (props) => {
  const [kandidat, setKandidat] = useState({
    id_lowongan: " ",
    id_user: " ",
    id_hr: " ",
    status: " ",
  });

  useEffect(() => {
    console.log(props.idKandidat);
    const getPostAPI = () => {
      axios
        .get("http://localhost:3000/kandidats/" + props.idKandidat, {
          headers: authHeader(),
        })
        .then((result) => {
          setKandidat(result.data);
          console.log(kandidat);
        });
    };
    getPostAPI();
  }, []);

  const handleUpdateStatus = (event) => {
    event.preventDefault();
    putDataToAPI();
  };

  const putDataToAPI = (e) => {
    axios
      .put(`http://localhost:3000/kandidats/` + props.idKandidat, kandidat, {
        headers: authHeader(),
      })
      .then((res) => {});
  };

  const handleChange = (event) => {
    let Kandidatnew = { ...kandidat };

    Kandidatnew[event.target.name] = event.target.value;
    setKandidat(Kandidatnew);
  };
  return (
    <div className="form-main">
      <div className="form-second">
        <div className="content">
          <h2
            className="section-title"
            style={{ color: "Green", backgroundColor: "" }}
          >
            Update Status Loker
          </h2>
          <hr></hr>
          <Form>
            <div>
              <Form.Group className="mb-3" controlId="formBasicNama">
                <Form.Label>Nama Kandidat</Form.Label>
                <Form.Control
                  type="text"
                  value={kandidat.User ? kandidat.User.nama : "-"}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Nama Perusahaan</Form.Label>
                <Form.Control
                  type="text"
                  value={
                    kandidat.Product ? kandidat.Product.nama_perusahaan : "-"
                  }
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Posisi</Form.Label>
                <Form.Control
                  type="text"
                  value={kandidat.Product ? kandidat.Product.posisi : "-"}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicemail">
                <Form.Label>Penempatan</Form.Label>
                <Form.Control
                  type="text"
                  value={kandidat.Product ? kandidat.Product.lokasi : "-"}
                  disabled
                />
              </Form.Group>
              <Form.Select
                aria-label="Default select example"
                name="status"
                onChange={handleChange}
              >
                <option>{kandidat.status}</option>
                <option value="Test">Test</option>
                <option value="Interview">Interview</option>
                <option value="Lulus">Lulus</option>
                <option value="Tidak Lulus">Tidak Lulus</option>
              </Form.Select>
            </div>
            <div className="edit d-grid">
              <Button
                variant="primary"
                type="submit"
                onClick={handleUpdateStatus}
              >
                Update
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatusUser;

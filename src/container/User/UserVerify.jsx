import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UserVerify() {
  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const getPostAPI = () => {
      axios
        .get("https://backend-recruitment-production.up.railway.app/users/verify/" + params.token)
        .then((result) => {
          setTimeout(() => {
            navigate('/')
          }, 2000)
        });
    };
    getPostAPI();
  }, []);

  return (
    <Container>
        <h1>Email Terverifikasi!</h1>
    </Container>
  );
}

export default UserVerify;

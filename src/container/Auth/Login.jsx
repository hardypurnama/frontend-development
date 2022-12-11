import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import "./Auth.css";

function Login() {
  const [FormLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormLogin({ ...FormLogin, [event.target.name]: event.target.value });
  };

  const handleLogin = (token) => {
    localStorage.setItem("user", JSON.stringify(jwt_decode(token)));
    localStorage.setItem("token", JSON.stringify(token));
    return navigate("/");
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    axios
      .post(
        "https://backend-recruitment-production.up.railway.app/users/login",
        FormLogin
      )
      .then(
        (res) => {
          if (res.data.token) {
            handleLogin(res.data.token);
          }
        },
        (err) => {
          console.log("error: ".err);
        }
      );
  };

  return (
    <Container>
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h2 className="Auth-form-title">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="User Name"
                  name="username"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="d-grid gap-2 mt-3">
                <Button variant="success" type="submit">
                  Login
                </Button>
              </div>
              {/* <div className="or"> */}
                <p class='strikearound'> OR </p>
              {/* </div> */}
              <div className="veri d-grid gap-2 mt-3">
                <GoogleLogin
                  onSuccess={async (token) => {
                    const userInfo = await axios
                      .post(
                        "https://backend-recruitment-production.up.railway.app/users/google",
                        {
                          credential: token.credential,
                          clientId: token.clientId,
                        }
                      )
                      .then((res) => handleLogin(res.data.token));
                  }}
                />
                <Link to="/LupaPassword">Lupa Password?</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;

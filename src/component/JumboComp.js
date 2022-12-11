import React from "react";
import "./JumboComp.css";
import SearchCard from "./SearchCard";
import logo from "../img/logo.svg";
import { Container } from "react-bootstrap";

function JumboComp(props) {
  return (
    <div>
      <div class="mb-4 rounded-3">
        <div class="container-fluid py-5">
          <img
              src={logo} 
              width="431"
              height="85"
            />
          <h3 style={{ color: "white", backgroundColor: "" }}>Temukan Pekerjaan Impianmu</h3>
          <div className="search">
          <SearchCard search={props.search}/>
          <Container><p style={{ color: "white",textAlign:"left" }}>Cari Lowongan kerja sesuai dengan keahlian & lokasi</p></Container>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default JumboComp;
